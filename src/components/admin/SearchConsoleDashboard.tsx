import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RefreshCw } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { useToast } from "@/hooks/use-toast";

type Row = { clicks: number; impressions: number; ctr: number; position: number };
type Snapshot = {
  range: { startDate: string; endDate: string };
  totals: { clicks: number; impressions: number; ctr: number; position: number | null };
  daily: { date: string; clicks: number; impressions: number }[];
  queries: (Row & { query: string })[];
  pages: (Row & { page: string })[];
  sitemaps: { path: string; lastSubmitted: string | null; lastDownloaded: string | null; isPending: boolean; errors: number; warnings: number; submitted: number }[];
  inspections: { url: string; verdict?: string | null; coverageState?: string | null; lastCrawlTime?: string | null; error?: string }[];
};
type State = {
  status: string;
  selected_site_url: string | null;
  candidates: string[];
  snapshot: Snapshot | null;
  error: string | null;
  refreshed_at: string | null;
};

const fmt = (n: number) => n.toLocaleString("en-US");
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
const day = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—");
const shortPath = (url: string) => { try { return new URL(url).pathname; } catch { return url; } };

const SearchConsoleDashboard = () => {
  const [state, setState] = useState<State | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const load = useCallback(async () => {
    const { data, error } = await (supabase as any)
      .from("search_console_state").select("*").eq("id", 1).maybeSingle();
    if (error) console.error("Search Console load failed:", error);
    setState(data as State | null);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const refresh = async (selectedSiteUrl?: string) => {
    setRefreshing(true);
    const { data, error } = await supabase.functions.invoke("search-console-sync", {
      body: selectedSiteUrl ? { selectedSiteUrl } : {},
    });
    setRefreshing(false);
    if (error || data?.status === "error") {
      toast({ title: "Couldn't refresh Search Console", description: data?.error ?? error?.message, variant: "destructive" });
    } else {
      toast({ title: "Search Console report updated" });
    }
    load();
  };

  if (loading) return <p className="text-black">Loading Search Console report…</p>;

  const snap = state?.snapshot;
  const hasPerformance = !!snap && (snap.totals.impressions > 0 || snap.daily.length > 0);

  return (
    <div className="space-y-6 text-black">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-black">Google Search Console</h2>
          <p className="text-sm text-black">
            {state?.selected_site_url ?? "No property selected"} · Last updated {state?.refreshed_at ? new Date(state.refreshed_at).toLocaleString("en-US") : "never"} · Refreshes daily
          </p>
        </div>
        <Button onClick={() => refresh()} disabled={refreshing} className="bg-black text-white hover:bg-gray-800">
          <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
          {refreshing ? "Refreshing…" : "Refresh now"}
        </Button>
      </div>

      {state?.error && (
        <Alert variant="destructive" className="bg-red-50 border-red-200">
          <AlertDescription className="text-black">{state.error}</AlertDescription>
        </Alert>
      )}

      {state?.status === "selection_required" && state.candidates.length > 0 && (
        <Card className="bg-white border-gray-300">
          <CardHeader>
            <CardTitle className="text-black">Choose which Search Console property to report on</CardTitle>
            <CardDescription className="text-black">More than one verified property covers previsemortgage.com.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {state.candidates.map((c) => (
              <Button key={c} variant="outline" disabled={refreshing} onClick={() => refresh(c)} className="border-black bg-white text-black hover:bg-gray-100">
                {c}
              </Button>
            ))}
          </CardContent>
        </Card>
      )}

      {snap && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["Clicks", fmt(snap.totals.clicks)],
              ["Impressions", fmt(snap.totals.impressions)],
              ["Click rate", pct(snap.totals.ctr)],
              ["Avg. position", snap.totals.position ? snap.totals.position.toFixed(1) : "—"],
            ].map(([label, value]) => (
              <Card key={label} className="bg-white border-gray-300">
                <CardContent className="pt-6">
                  <p className="text-sm text-black">{label}</p>
                  <p className="text-3xl font-bold text-black">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-black">
            {day(snap.range.startDate)} – {day(snap.range.endDate)} (last 28 complete days; Google reports with a 2–3 day delay)
          </p>

          {!hasPerformance && (
            <Alert className="bg-gray-50 border-gray-300">
              <AlertDescription className="text-black">
                Google hasn't sent click and search data for this property yet. New properties usually start showing numbers within a few days — this page fills in automatically.
              </AlertDescription>
            </Alert>
          )}

          {snap.daily.length > 0 && (
            <Card className="bg-white border-gray-300">
              <CardHeader><CardTitle className="text-black">Clicks & impressions by day</CardTitle></CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={snap.daily}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#000" }} tickFormatter={(d) => d.slice(5)} />
                    <YAxis yAxisId="l" tick={{ fontSize: 11, fill: "#000" }} />
                    <YAxis yAxisId="r" orientation="right" tick={{ fontSize: 11, fill: "#000" }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="l" type="monotone" dataKey="clicks" name="Clicks" stroke="#2563eb" dot={false} strokeWidth={2} />
                    <Line yAxisId="r" type="monotone" dataKey="impressions" name="Impressions" stroke="#7c3aed" dot={false} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-6">
            <PerfTable title="Top searches" rows={snap.queries.map((r) => ({ ...r, label: r.query }))} labelHead="Search" />
            <PerfTable title="Top pages" rows={snap.pages.map((r) => ({ ...r, label: shortPath(r.page) }))} labelHead="Page" />
          </div>

          <Card className="bg-white border-gray-300">
            <CardHeader>
              <CardTitle className="text-black">Indexing status</CardTitle>
              <CardDescription className="text-black">Whether Google has these key pages in its search results.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-black">Page</TableHead>
                    <TableHead className="text-black">Status</TableHead>
                    <TableHead className="text-black">Google's note</TableHead>
                    <TableHead className="text-black">Last crawled</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {snap.inspections.map((i) => (
                    <TableRow key={i.url}>
                      <TableCell className="text-black font-medium">{shortPath(i.url)}</TableCell>
                      <TableCell>
                        {i.error ? (
                          <Badge variant="outline" className="border-red-400 text-black">Couldn't check</Badge>
                        ) : i.verdict === "PASS" ? (
                          <Badge className="bg-green-100 text-black border border-green-400 hover:bg-green-100">Indexed</Badge>
                        ) : i.verdict === "FAIL" ? (
                          <Badge className="bg-red-100 text-black border border-red-400 hover:bg-red-100">Problem</Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-black border border-amber-400 hover:bg-amber-100">Not indexed yet</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-black text-sm">{i.coverageState ?? "—"}</TableCell>
                      <TableCell className="text-black text-sm">{day(i.lastCrawlTime ?? null)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {snap.sitemaps.length > 0 && (
            <Card className="bg-white border-gray-300">
              <CardHeader><CardTitle className="text-black">Sitemaps</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-black">Sitemap</TableHead>
                      <TableHead className="text-black">Pages listed</TableHead>
                      <TableHead className="text-black">Last read by Google</TableHead>
                      <TableHead className="text-black">Errors / warnings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {snap.sitemaps.map((s) => (
                      <TableRow key={s.path}>
                        <TableCell className="text-black">{shortPath(s.path)}</TableCell>
                        <TableCell className="text-black">{fmt(s.submitted)}</TableCell>
                        <TableCell className="text-black">{s.isPending ? "Pending" : day(s.lastDownloaded)}</TableCell>
                        <TableCell className="text-black">{s.errors} / {s.warnings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {!snap && state?.status !== "selection_required" && (
        <p className="text-black">No report yet. Click "Refresh now" to pull the first one.</p>
      )}
    </div>
  );
};

const PerfTable = ({ title, rows, labelHead }: { title: string; labelHead: string; rows: (Row & { label: string })[] }) => (
  <Card className="bg-white border-gray-300">
    <CardHeader><CardTitle className="text-black">{title}</CardTitle></CardHeader>
    <CardContent>
      {rows.length === 0 ? (
        <p className="text-sm text-black">No data yet.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-black">{labelHead}</TableHead>
              <TableHead className="text-black text-right">Clicks</TableHead>
              <TableHead className="text-black text-right">Impr.</TableHead>
              <TableHead className="text-black text-right">Pos.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.label}>
                <TableCell className="text-black max-w-[220px] truncate" title={r.label}>{r.label}</TableCell>
                <TableCell className="text-black text-right">{fmt(r.clicks)}</TableCell>
                <TableCell className="text-black text-right">{fmt(r.impressions)}</TableCell>
                <TableCell className="text-black text-right">{r.position.toFixed(1)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </CardContent>
  </Card>
);

export default SearchConsoleDashboard;

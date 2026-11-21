import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import { AlertTriangle, Phone, CalendarDays } from "lucide-react";
import { LEARN_CATEGORIES, type LearnArticle } from "@/lib/learning-center";

export function LearnCta() {
  return (
    <Card className="p-6 md:p-8 bg-accent/10 border-accent/40 text-center">
      <h2 className="text-2xl font-bold text-white mb-3">Talk With Previse Mortgage</h2>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Every situation is different. Contact Previse Mortgage to review your goals and see which options you may qualify for.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg" variant="hero">
          <Link to="/schedule"><CalendarDays className="h-5 w-5 mr-2" />Schedule a Call</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
          <a href="tel:+17178195196"><Phone className="h-5 w-5 mr-2" />(717) 819-5196</a>
        </Button>
      </div>
    </Card>
  );
}

export default function LearnArticlePage({ article }: { article: LearnArticle }) {
  const category = LEARN_CATEGORIES.find((c) => c.id === article.category);
  const h2 = "text-2xl font-bold text-white mb-3 mt-10";
  const p = "text-white/80 leading-relaxed mb-3";
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
          <Link to="/learn" className="hover:text-accent">Mortgage Learning Center</Link>
          <span className="mx-2">/</span>
          <span>{category?.name}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{article.h1}</h1>
        <Card className="p-6 bg-white/5 border-accent/30 mb-4">
          <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-2">Short answer</p>
          <p className="text-white/90 text-lg leading-relaxed">{article.answer}</p>
        </Card>

        {article.sections.map((s) => (
          <section key={s.heading}>
            <h2 className={h2}>{s.heading}</h2>
            {s.paragraphs.map((t) => <p key={t} className={p}>{t}</p>)}
            {s.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-white/80">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-10 rounded-lg border border-accent/40 bg-white/5 p-6">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-accent" />Eligibility and important notes
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            {article.caveats.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="text-white/60 text-sm mt-4">
            This article is general education, not a commitment to lend or legal, tax or financial advice. Previse Mortgage LLC, NMLS# 2730429. Residential home loans in Pennsylvania and Colorado only; business-purpose investment loans where permitted by state law.
          </p>
        </section>

        <section>
          <h2 className={h2}>Frequently asked questions</h2>
          <div className="space-y-5">
            {article.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold text-white mb-1">{f.q}</h3>
                <p className="text-white/80 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={h2}>Related resources</h2>
          <ul className="space-y-2">
            {article.related.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-accent hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        <div className="mt-12"><LearnCta /></div>
      </main>
      <Footer />
    </div>
  );
}

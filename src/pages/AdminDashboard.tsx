import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Eye, LogOut, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface MortgageApplication {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  loan_type: string | null;
  home_budget: string | null;
  home_type: string | null;
  home_use: string | null;
  first_time_buyer: string | null;
  purchase_timing: string | null;
  buying_obstacles: string | null;
  military_service: string[] | null;
  down_payment: string | null;
  savings_amount: string | null;
  financial_institutions: string[] | null;
  employment_status: string | null;
  annual_income: string | null;
  bankruptcy: string | null;
  credit_score: string | null;
  credit_services: string | null;
  real_estate_agent: string | null;
  location: string | null;
  zip_code: string | null;
  homebuying_journey: string | null;
}

const AdminDashboard = () => {
  const [applications, setApplications] = useState<MortgageApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, isAdmin, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated or not admin
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin-login");
      return;
    }
    
    if (user && isAdmin) {
      fetchApplications();
    }
  }, [user, isAdmin, authLoading, navigate]);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('mortgage_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
      setError("");
    } catch (error) {
      console.error('Error fetching applications:', error);
      setError('Failed to load applications. Please check your permissions.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin-login");
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated (will redirect)
  if (!user || !isAdmin) {
    return null;
  }

  const ApplicationDetailDialog = ({ application }: { application: MortgageApplication }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
          <DialogDescription>
            Application from {application.first_name} {application.last_name} - {formatDate(application.created_at)}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {application.first_name} {application.last_name}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Phone:</strong> {application.phone}</p>
                <p><strong>Location:</strong> {application.location}</p>
                <p><strong>ZIP Code:</strong> {application.zip_code}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Loan Information</h3>
              <div className="space-y-2">
                <p><strong>Loan Type:</strong> {application.loan_type}</p>
                <p><strong>Home Budget:</strong> {application.home_budget}</p>
                <p><strong>Home Type:</strong> {application.home_type}</p>
                <p><strong>Home Use:</strong> {application.home_use}</p>
                <p><strong>First Time Buyer:</strong> {application.first_time_buyer}</p>
                <p><strong>Purchase Timing:</strong> {application.purchase_timing}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Financial Information</h3>
              <div className="space-y-2">
                <p><strong>Down Payment:</strong> {application.down_payment}</p>
                <p><strong>Savings Amount:</strong> {application.savings_amount}</p>
                <p><strong>Employment Status:</strong> {application.employment_status}</p>
                <p><strong>Annual Income:</strong> {application.annual_income}</p>
                <p><strong>Credit Score:</strong> {application.credit_score}</p>
                <p><strong>Bankruptcy:</strong> {application.bankruptcy}</p>
                <p><strong>Credit Services:</strong> {application.credit_services}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Additional Information</h3>
              <div className="space-y-2">
                <p><strong>Military Service:</strong> {application.military_service?.join(', ') || 'None'}</p>
                <p><strong>Financial Institutions:</strong> {application.financial_institutions?.join(', ') || 'None'}</p>
                <p><strong>Buying Obstacles:</strong> {application.buying_obstacles}</p>
                <p><strong>Real Estate Agent:</strong> {application.real_estate_agent}</p>
                <p><strong>Homebuying Journey:</strong> {application.homebuying_journey}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Shield className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p>Loading applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground">Mortgage Application Management</p>
            <p className="text-sm text-muted-foreground">Welcome, {user.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Application Overview</CardTitle>
            <CardDescription>
              Total applications: {applications.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Applications</TabsTrigger>
                <TabsTrigger value="recent">Recent (Last 7 days)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Loan Type</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell className="font-medium">
                            {formatDate(application.created_at)}
                          </TableCell>
                          <TableCell>
                            {application.first_name} {application.last_name}
                          </TableCell>
                          <TableCell>{application.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {application.loan_type || 'Not specified'}
                            </Badge>
                          </TableCell>
                          <TableCell>{application.home_budget}</TableCell>
                          <TableCell>{application.location}</TableCell>
                          <TableCell>
                            <ApplicationDetailDialog application={application} />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Loan Type</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications
                        .filter(app => {
                          const appDate = new Date(app.created_at);
                          const weekAgo = new Date();
                          weekAgo.setDate(weekAgo.getDate() - 7);
                          return appDate >= weekAgo;
                        })
                        .map((application) => (
                          <TableRow key={application.id}>
                            <TableCell className="font-medium">
                              {formatDate(application.created_at)}
                            </TableCell>
                            <TableCell>
                              {application.first_name} {application.last_name}
                            </TableCell>
                            <TableCell>{application.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {application.loan_type || 'Not specified'}
                              </Badge>
                            </TableCell>
                            <TableCell>{application.home_budget}</TableCell>
                            <TableCell>{application.location}</TableCell>
                            <TableCell>
                              <ApplicationDetailDialog application={application} />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
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
  first_time_buyer: string | null;
  purchase_timing: string | null;
  military_service: string[] | null;
  savings_amount: string | null;
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
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-8 w-8 animate-spin mx-auto mb-4 text-black" />
          <p className="text-black">Checking authentication...</p>
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
        <Button variant="outline" size="sm" className="border-black text-white hover:bg-black hover:text-white">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-white text-black border border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-black">Application Details</DialogTitle>
          <DialogDescription className="text-black">
            Application from {application.first_name} {application.last_name} - {formatDate(application.created_at)}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-black">Personal Information</h3>
              <div className="space-y-2 text-black">
                <p><strong className="text-black">Name:</strong> {application.first_name} {application.last_name}</p>
                <p><strong className="text-black">Email:</strong> {application.email}</p>
                <p><strong className="text-black">Phone:</strong> {application.phone}</p>
                <p><strong className="text-black">Location:</strong> {application.location}</p>
                <p><strong className="text-black">ZIP Code:</strong> {application.zip_code}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-black">Loan Information</h3>
              <div className="space-y-2 text-black">
                <p><strong className="text-black">Loan Type:</strong> {application.loan_type}</p>
                <p><strong className="text-black">Home Budget:</strong> {application.home_budget}</p>
                <p><strong className="text-black">First Time Buyer:</strong> {application.first_time_buyer}</p>
                <p><strong className="text-black">Purchase Timing:</strong> {application.purchase_timing}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-black">Financial Information</h3>
              <div className="space-y-2 text-black">
                <p><strong className="text-black">Savings Amount:</strong> {application.savings_amount}</p>
                <p><strong className="text-black">Employment Status:</strong> {application.employment_status}</p>
                <p><strong className="text-black">Annual Income:</strong> {application.annual_income}</p>
                <p><strong className="text-black">Credit Score:</strong> {application.credit_score}</p>
                <p><strong className="text-black">Bankruptcy:</strong> {application.bankruptcy}</p>
                <p><strong className="text-black">Credit Services:</strong> {application.credit_services}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-black">Additional Information</h3>
              <div className="space-y-2 text-black">
                <p><strong className="text-black">Military Service:</strong> {application.military_service?.join(', ') || 'None'}</p>
                <p><strong className="text-black">Real Estate Agent:</strong> {application.real_estate_agent}</p>
                <p><strong className="text-black">Homebuying Journey:</strong> {application.homebuying_journey}</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Shield className="h-8 w-8 animate-spin mx-auto mb-4 text-black" />
            <p className="text-black">Loading applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-black">Admin Dashboard</h1>
            <p className="text-xl text-black">Mortgage Application Management</p>
            <p className="text-sm text-black">Welcome, {user.email}</p>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="border-black text-white hover:bg-gray-100">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="bg-red-50 border-red-200 text-black">
            <AlertDescription className="text-black">{error}</AlertDescription>
          </Alert>
        )}

        <Card className="bg-white border-gray-300">
          <CardHeader>
            <CardTitle className="text-black">Application Overview</CardTitle>
            <CardDescription className="text-black">
              Total applications: {applications.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="text-black data-[state=active]:bg-white data-[state=active]:text-black">All Applications</TabsTrigger>
                <TabsTrigger value="recent" className="text-black data-[state=active]:bg-white data-[state=active]:text-black">Recent (Last 7 days)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <div className="rounded-md border border-gray-300">
                  <Table className="bg-white">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-black">Date</TableHead>
                        <TableHead className="text-black">Name</TableHead>
                        <TableHead className="text-black">Email</TableHead>
                        <TableHead className="text-black">Loan Type</TableHead>
                        <TableHead className="text-black">Budget</TableHead>
                        <TableHead className="text-black">Location</TableHead>
                        <TableHead className="text-black">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((application) => (
                        <TableRow key={application.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-black">
                            {formatDate(application.created_at)}
                          </TableCell>
                          <TableCell className="text-black">
                            {application.first_name} {application.last_name}
                          </TableCell>
                          <TableCell className="text-black">{application.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="border-black text-black">
                              {application.loan_type || 'Not specified'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-black">{application.home_budget}</TableCell>
                          <TableCell className="text-black">{application.location}</TableCell>
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
                <div className="rounded-md border border-gray-300">
                  <Table className="bg-white">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-black">Date</TableHead>
                        <TableHead className="text-black">Name</TableHead>
                        <TableHead className="text-black">Email</TableHead>
                        <TableHead className="text-black">Loan Type</TableHead>
                        <TableHead className="text-black">Budget</TableHead>
                        <TableHead className="text-black">Location</TableHead>
                        <TableHead className="text-black">Actions</TableHead>
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
                          <TableRow key={application.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium text-black">
                              {formatDate(application.created_at)}
                            </TableCell>
                            <TableCell className="text-black">
                              {application.first_name} {application.last_name}
                            </TableCell>
                            <TableCell className="text-black">{application.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="border-black text-black">
                                {application.loan_type || 'Not specified'}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-black">{application.home_budget}</TableCell>
                            <TableCell className="text-black">{application.location}</TableCell>
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
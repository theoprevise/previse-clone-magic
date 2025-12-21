import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Eye, LogOut, Shield, Plus, Edit, Trash2, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const AdminDashboard = () => {
  const [applications, setApplications] = useState<MortgageApplication[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    published: false
  });
  const { user, isAdmin, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin-login");
      return;
    }
    
    if (user && isAdmin) {
      fetchApplications();
      fetchBlogPosts();
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

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleBlogSubmit = async () => {
    try {
      const slug = blogForm.slug || generateSlug(blogForm.title);
      
      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: blogForm.title,
            slug,
            excerpt: blogForm.excerpt || null,
            content: blogForm.content,
            featured_image: blogForm.featured_image || null,
            published: blogForm.published
          })
          .eq('id', editingPost.id);

        if (error) throw error;
        toast({ title: "Blog post updated successfully" });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title: blogForm.title,
            slug,
            excerpt: blogForm.excerpt || null,
            content: blogForm.content,
            featured_image: blogForm.featured_image || null,
            published: blogForm.published,
            author_id: user?.id
          });

        if (error) throw error;
        toast({ title: "Blog post created successfully" });
      }

      setBlogDialogOpen(false);
      resetBlogForm();
      fetchBlogPosts();
    } catch (error: any) {
      console.error('Error saving blog post:', error);
      toast({ 
        title: "Error saving blog post", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setBlogForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      featured_image: post.featured_image || "",
      published: post.published
    });
    setBlogDialogOpen(true);
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      toast({ title: "Blog post deleted successfully" });
      fetchBlogPosts();
    } catch (error: any) {
      console.error('Error deleting blog post:', error);
      toast({ 
        title: "Error deleting blog post", 
        description: error.message,
        variant: "destructive" 
      });
    }
  };

  const resetBlogForm = () => {
    setEditingPost(null);
    setBlogForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image: "",
      published: false
    });
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
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/ai-readiness')}
              className="border-black text-white hover:bg-black hover:text-white"
            >
              <Shield className="h-4 w-4 mr-2" />
              AI Analysis
            </Button>
            <Button variant="outline" onClick={handleSignOut} className="border-black text-white hover:bg-black hover:text-white">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="bg-red-50 border-red-200 text-black">
            <AlertDescription className="text-black">{error}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="applications" className="text-black data-[state=active]:bg-white data-[state=active]:text-black">
              Applications ({applications.length})
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-black data-[state=active]:bg-white data-[state=active]:text-black">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog Posts ({blogPosts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-4">
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
          </TabsContent>

          <TabsContent value="blog" className="space-y-4">
            <Card className="bg-white border-gray-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-black">Blog Posts</CardTitle>
                  <CardDescription className="text-black">
                    Manage your blog content
                  </CardDescription>
                </div>
                <Dialog open={blogDialogOpen} onOpenChange={(open) => {
                  setBlogDialogOpen(open);
                  if (!open) resetBlogForm();
                }}>
                  <DialogTrigger asChild>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] bg-white text-black border border-gray-300">
                    <DialogHeader>
                      <DialogTitle className="text-black">
                        {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="max-h-[70vh] pr-4">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="title" className="text-black">Title *</Label>
                          <Input
                            id="title"
                            value={blogForm.title}
                            onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                            placeholder="Enter post title"
                            className="bg-white border-gray-300 text-black"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="slug" className="text-black">Slug (URL)</Label>
                          <Input
                            id="slug"
                            value={blogForm.slug}
                            onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                            placeholder="auto-generated-from-title"
                            className="bg-white border-gray-300 text-black"
                          />
                          <p className="text-sm text-gray-500">Leave empty to auto-generate from title</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="excerpt" className="text-black">Excerpt</Label>
                          <Textarea
                            id="excerpt"
                            value={blogForm.excerpt}
                            onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                            placeholder="Brief summary of the post"
                            rows={2}
                            className="bg-white border-gray-300 text-black"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="content" className="text-black">Content * (HTML supported)</Label>
                          <Textarea
                            id="content"
                            value={blogForm.content}
                            onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                            placeholder="Write your blog post content here. HTML tags are supported."
                            rows={12}
                            className="bg-white border-gray-300 text-black font-mono text-sm"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="featured_image" className="text-black">Featured Image URL</Label>
                          <Input
                            id="featured_image"
                            value={blogForm.featured_image}
                            onChange={(e) => setBlogForm({ ...blogForm, featured_image: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                            className="bg-white border-gray-300 text-black"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            id="published"
                            checked={blogForm.published}
                            onCheckedChange={(checked) => setBlogForm({ ...blogForm, published: checked })}
                          />
                          <Label htmlFor="published" className="text-black">Published</Label>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button 
                            onClick={handleBlogSubmit}
                            disabled={!blogForm.title || !blogForm.content}
                            className="bg-black text-white hover:bg-gray-800"
                          >
                            {editingPost ? "Update Post" : "Create Post"}
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setBlogDialogOpen(false);
                              resetBlogForm();
                            }}
                            className="border-gray-300 text-black"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-gray-300">
                  <Table className="bg-white">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="text-black">Title</TableHead>
                        <TableHead className="text-black">Slug</TableHead>
                        <TableHead className="text-black">Status</TableHead>
                        <TableHead className="text-black">Created</TableHead>
                        <TableHead className="text-black">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-gray-500 py-8">
                            No blog posts yet. Click "New Post" to create one.
                          </TableCell>
                        </TableRow>
                      ) : (
                        blogPosts.map((post) => (
                          <TableRow key={post.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium text-black">{post.title}</TableCell>
                            <TableCell className="text-gray-600">/blog/{post.slug}</TableCell>
                            <TableCell>
                              <Badge 
                                variant="outline" 
                                className={post.published ? "border-green-500 text-green-600" : "border-gray-400 text-gray-500"}
                              >
                                {post.published ? "Published" : "Draft"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-black">{formatDate(post.created_at)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleEditPost(post)}
                                  className="border-gray-300 text-black hover:bg-gray-100"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleDeletePost(post.id)}
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                                {post.published && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                                    className="border-gray-300 text-black hover:bg-gray-100"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

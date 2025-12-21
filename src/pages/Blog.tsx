import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { 
  Calendar,
  ArrowRight,
  BookOpen
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  published: boolean;
  created_at: string;
}

const Blog = () => {
  const navigate = useNavigate();

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Mortgage Blog | Expert Tips & Insights | Previse Mortgage"
        description="Stay informed with the latest mortgage tips, home buying advice, and industry insights from Previse Mortgage experts."
        keywords="mortgage blog, home buying tips, mortgage advice, refinancing tips, first time homebuyer guide"
        canonicalUrl="https://previsemortgage.com/blog"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Insights & Tips
                </span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-white">
                Mortgage <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Blog</span>
              </h1>
              
              {/* Modern divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-4 w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Expert insights, tips, and guides to help you navigate your mortgage journey.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-pulse">
                    <div className="h-48 bg-white/10 rounded-xl mb-4"></div>
                    <div className="h-6 bg-white/10 rounded mb-2"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    {post.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.featured_image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-accent text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.created_at)}
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                      )}
                      <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">No Posts Yet</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  We're working on some great content. Check back soon for mortgage tips and insights!
                </p>
                <Button 
                  onClick={() => navigate('/schedule')}
                  className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-8 py-3 rounded-full font-bold"
                >
                  Schedule a Consultation
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Have Questions? <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Let's Talk</span>
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Get personalized mortgage guidance from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/schedule')}
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/mortgage-programs')}
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  View Loan Programs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

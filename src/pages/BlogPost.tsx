import { Link } from "@/lib/router-compat";
import { sanitizeArticleHtml, articleDescription, type BlogArticle } from "@/lib/blog-content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { 
  Calendar,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
const BlogPost = ({ post }: { post: BlogArticle }) => {
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  });

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title={`${post.title} | Previse Mortgage Blog`}
        description={articleDescription(post)}
        keywords="mortgage blog, home buying tips, mortgage advice"
        canonicalUrl={`https://previsemortgage.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.featured_image}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden pt-20 pb-12">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <div className="flex items-center gap-2 text-accent text-sm mb-4">
                <Calendar className="w-4 h-4" />
                {formatDate(post.created_at)}
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-white/80">{post.excerpt}</p>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image && (
          <section className="bg-primary-dark">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto -mt-4">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full rounded-2xl shadow-2xl shadow-accent/10"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16 bg-gradient-to-b from-primary-dark to-primary">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-white
                  prose-p:text-white/80 prose-p:leading-relaxed
                  prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-light
                  prose-strong:text-white
                  prose-ul:text-white/80 prose-ol:text-white/80
                  prose-li:marker:text-accent"
                dangerouslySetInnerHTML={{ 
                  __html: sanitizeArticleHtml(post.content)
                }}
              />
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let our experts help you find the right mortgage for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link to="/schedule">Schedule Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} /></Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  <Link to="/blog">More Articles</Link>
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

export default BlogPost;

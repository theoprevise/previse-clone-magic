import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "@/lib/router-compat";
import { LEARN_ARTICLES, LEARN_CATEGORIES } from "@/lib/learning-center";
import { LearnCta } from "./LearnArticlePage";

export default function LearningCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Mortgage <span className="text-accent">Learning Center</span></h1>
        <p className="text-white/80 text-lg max-w-3xl mb-10">
          Clear, plain-English answers to common mortgage questions about buying a home, refinancing, self-employed income and financing investment property, from Previse Mortgage LLC.
        </p>
        <div className="space-y-10">
          {LEARN_CATEGORIES.map((cat) => {
            const items = LEARN_ARTICLES.filter((a) => a.category === cat.id);
            return (
              <section key={cat.id} id={cat.id}>
                <h2 className="text-2xl font-bold text-white mb-1">{cat.name}</h2>
                <p className="text-white/70 mb-4">{cat.blurb}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((a) => (
                    <Card key={a.slug} className="p-5 bg-white/5 border-accent/20">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        <Link to={`/learn/${a.slug}`} className="hover:text-accent">{a.h1}</Link>
                      </h3>
                      <p className="text-white/70 text-sm">{a.description}</p>
                    </Card>
                  ))}
                  {items.length === 0 && (
                    <Card className="p-5 bg-white/5 border-accent/20">
                      <p className="text-white/70 text-sm">
                        New articles coming soon. Meanwhile, see our <Link to="/refinance" className="text-accent hover:underline">refinance options</Link>.
                      </p>
                    </Card>
                  )}
                </div>
              </section>
            );
          })}
        </div>
        <div className="mt-12"><LearnCta /></div>
      </main>
      <Footer />
    </div>
  );
}

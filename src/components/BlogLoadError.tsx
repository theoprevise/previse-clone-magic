import { Link, useRouter } from "@tanstack/react-router";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogLoadError() {
  const router = useRouter();
  const { reset } = useQueryErrorResetBoundary();
  return <div className="min-h-screen bg-primary text-primary-foreground">
    <Header />
    <main className="container mx-auto px-4 py-24 text-center" role="alert">
      <h1 className="text-3xl font-bold">Articles are temporarily unavailable</h1>
      <p className="mt-4">Please try again in a moment.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Button variant="accent" onClick={() => { reset(); void router.invalidate(); }}>Try Again</Button>
        <Button variant="outline" asChild><Link to="/learn">Learning Center</Link></Button>
      </div>
    </main>
    <Footer />
  </div>;
}

import { useEffect, useState } from "react";
import { useLocation } from "@/lib/router-compat";
import { Star, X } from "lucide-react";
import { GOOGLE_REVIEWS, GOOGLE_REVIEW_COUNT, MAPS_LINK } from "@/components/GoogleReviewsSection";

const DISMISS_KEY = "previse_floating_reviews_dismissed";
const HIDDEN_PATHS = ["/admin", "/application", "/colorado-dscr", "/auth"];

/** Small rotating Google review card pinned to the bottom-left of public pages. */
const FloatingReviews = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(DISMISS_KEY) === "1");
  const [index, setIndex] = useState(0);

  const hidden =
    dismissed ||
    HIDDEN_PATHS.some((p) => pathname.startsWith(p)) ||
    pathname.includes("-print") ||
    pathname.includes("thank-you");

  useEffect(() => {
    if (hidden) return;
    const show = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(show);
  }, [hidden]);

  useEffect(() => {
    if (!visible || hidden) return;
    const rotate = setInterval(() => setIndex((i) => (i + 1) % GOOGLE_REVIEWS.length), 8000);
    return () => clearInterval(rotate);
  }, [visible, hidden]);

  if (hidden || !visible || GOOGLE_REVIEWS.length === 0) return null;

  const review = GOOGLE_REVIEWS[index] ?? GOOGLE_REVIEWS[0]!;

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <aside
      aria-label="Client reviews from Google"
      className="fixed bottom-4 left-4 z-40 w-[calc(100%-6.5rem)] max-w-xs animate-slide-up"
    >
      <div className="relative rounded-lg border border-accent/30 bg-card/95 backdrop-blur-md p-4 shadow-lg">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Hide reviews"
          className="absolute top-2 right-2 p-1 rounded text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block pr-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">5.0 · {GOOGLE_REVIEW_COUNT} Google reviews</span>
          </div>
          <p key={review.name} className="mt-2 text-sm text-foreground/90 leading-snug line-clamp-3 animate-fade-in">
            “{review.text}”
          </p>
          <p className="mt-2 text-xs font-semibold text-accent">— {review.name}</p>
        </a>
      </div>
    </aside>
  );
};

export default FloatingReviews;

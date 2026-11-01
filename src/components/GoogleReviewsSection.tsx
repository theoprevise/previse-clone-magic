import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Real reviews from the Previse Mortgage Google Business Profile (synced Nov 1, 2026).
export const GOOGLE_REVIEWS = [
  {
    name: "Mario Joyner",
    date: "October 2026",
    text: "I recently completed my first DSCR cash-out refinance with Teddy Carbone, and I couldn't be more pleased with the experience. I was initially a little nervous about going the DSCR route, but Teddy really put me at ease. He knows the product inside and out and was always available to answer my questions. What really impressed me was how quickly he got everything done. We closed in just 24 days! He even helped me find a new homeowners insurance policy and a qualified structural engineer when one was needed for the appraisal. Thanks to Teddy, I've gone from being skeptical about DSCR loans to looking forward to using them to grow my real estate portfolio. I wouldn't hesitate to work with him again. Highly recommended!",
  },
  {
    name: "Brian Shipton",
    date: "September 2026",
    text: "As an out-of-state investor and Florida real estate agent, I know how complicated transactions can get. I worked with Teddy to close my PA investment property, and while the loan took a little longer than expected, Teddy truly honored his word and got the deal done. He even went to bat for me to clear several odd lender requests. In the end, I even walked away with more cash out than initially expected. Highly recommend working with Teddy if you need a reliable broker who sees things through!",
  },
  {
    name: "Sara Murphy",
    date: "March 2026",
    text: "Previse Mortgage was very helpful and thorough. They advised us of various options so we felt informed and empowered to make the right choices for our family. Highly recommend them for personal, quality service.",
  },
];

export const GOOGLE_REVIEW_COUNT = 4;
const REVIEW_LINK = "https://g.page/r/CQVqJbLDScA0EBM/review";
export const MAPS_LINK = "https://maps.google.com/maps?cid=3801119190356945413";

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const GoogleReviewsSection = () => (
  <section className="py-16 px-4" aria-labelledby="reviews-heading">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground">
          5.0 stars from {GOOGLE_REVIEW_COUNT} reviews on Google
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {GOOGLE_REVIEWS.map((r) => (
          <figure key={r.name} className="bg-card/60 backdrop-blur border border-accent/20 rounded-lg p-6 flex flex-col">
            <Stars />
            <blockquote className="text-sm text-muted-foreground leading-relaxed mt-4 flex-1">“{r.text}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-foreground">{r.name}</span>
              <span className="text-muted-foreground"> · Google review · {r.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={REVIEW_LINK} target="_blank" rel="noopener noreferrer">Leave a Google Review</a>
        </Button>
        <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
            Read all reviews <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default GoogleReviewsSection;

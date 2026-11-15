import { createFileRoute } from "@tanstack/react-router";
import CreditScoreTips from "@/pages/CreditScoreTips";

export const Route = createFileRoute("/credit-score-mortgage-tips")({
  head: () => ({
    meta: [
      {
        "title": "Credit Score & Mortgage Approval Tips | Improve Your Score | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Credit Score & Mortgage Approval Tips | Improve Your Score | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Credit Score & Mortgage Approval Tips | Improve Your Score | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Learn what credit score you need for a mortgage and get actionable tips to improve your score fast. Expert guidance on mortgage approval factors."
      },
      {
        "property": "og:description",
        "content": "Learn what credit score you need for a mortgage and get actionable tips to improve your score fast. Expert guidance on mortgage approval factors."
      },
      {
        "name": "twitter:description",
        "content": "Learn what credit score you need for a mortgage and get actionable tips to improve your score fast. Expert guidance on mortgage approval factors."
      },
      {
        "name": "keywords",
        "content": "credit score for mortgage, improve credit score, mortgage approval tips, credit score requirements, home loan credit score"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/credit-score-mortgage-tips"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/credit-score-mortgage-tips"}],
  }),
  component: CreditScoreTips,
});

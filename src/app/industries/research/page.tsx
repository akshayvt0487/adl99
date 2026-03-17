import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function ResearchPage() {
  redirect("/industries/research");
}

import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function TechnicalAdvisoryPage() {
  redirect("/services/technical-advisory");
}

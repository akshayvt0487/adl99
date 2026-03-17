import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function LawFirmsPage() {
  redirect("/industries/law-firms");
}

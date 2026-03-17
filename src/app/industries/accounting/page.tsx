import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function AccountingPage() {
  redirect("/industries/accounting");
}

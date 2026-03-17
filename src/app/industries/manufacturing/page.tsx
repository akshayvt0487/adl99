import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function ManufacturingPage() {
  redirect("/industries/manufacturing");
}

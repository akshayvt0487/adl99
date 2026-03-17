import { redirect } from "next/navigation";

// Redirect to the dynamic route
export default function HealthClinicsPage() {
  redirect("/industries/health-clinics");
}

import EmployerFooter from "./EmployerFooter";
import EmployerNavbar from "./EmployerNavbar";

export default function PageLayoutEmployer({ children }) {
  return (
    <div className="min-h-screen flex-col flex">
      <EmployerNavbar />
      <main className="flex-grow">{children}</main>
      <EmployerFooter />
    </div>
  );
}

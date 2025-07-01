import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex-col flex">
      <Navbar />
      <main className="flex-grow mt-[60px]">{children}</main>
      <Footer />
    </div>
  );
}

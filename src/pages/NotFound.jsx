import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-primary">404</h1>
        <p className="text-textSecondary mt-4">Page not found</p>
        <Link
          to="/"
          className="mt-6 text-primary font-medium hover:underline"
        >
          Go back home →
        </Link>
      </section>
      <Footer />
    </>
  );
}

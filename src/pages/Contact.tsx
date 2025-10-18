import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page with contact section hash
    navigate("/#contact");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="static" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-heading mb-4">Redirecting to Contact...</h1>
          <p className="text-body-text">Taking you to the contact section on the home page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

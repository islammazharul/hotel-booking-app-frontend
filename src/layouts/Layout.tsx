import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="flex flex-col min-h-screen">
      {noHeaderFooter || <Navbar />}

      <div className="container mx-auto py-[55px] flex-1">{children}</div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Layout;

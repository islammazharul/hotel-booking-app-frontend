import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

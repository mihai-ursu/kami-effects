import { FC } from "react";
import LayoutProps from "./LayoutProps";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

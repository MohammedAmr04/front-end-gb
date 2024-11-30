import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className=" vh-100 d-flex flex-column">
      <Header />
      <div className="wrapper pt-5 pb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

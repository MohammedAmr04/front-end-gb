import { Container } from "react-bootstrap";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <Container className=" vh-100 d-flex flex-column">
            <Header />
            <div className="wrapper pt-3">
                <Outlet/>
            </div>
            <Footer/>
      </Container>
  )
}

import { Col, Container, Row } from "react-bootstrap";
// import imgLogin from '../assets/ai.jpg'
import FormLogin from "../components/forms/FormLogin";
export default function Login() {
  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center align-items-center"><FormLogin/> </Col>
      </Row>
    </Container>

  )
}

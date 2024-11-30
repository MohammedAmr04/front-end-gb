import { Container } from "react-bootstrap";
import Slider from "../components/common/Slider/Slider";
import Landing from "../components/common/Landing/Landing";
import Quote from "../components/common/Quote/Quote";

export default function Home() {
  return (
    <>
      <Landing />
      <Container>
        <Slider title={"New Arrives"} />
        <Quote />
      </Container>
    </>
  );
}

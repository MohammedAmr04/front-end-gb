import CardBook from "./../Card/CardBook";
import { Container } from "react-bootstrap";
import HeaderSection from "../HeaderSection/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  const books = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <Container className=" position-relative">
      <HeaderSection />
      {/* Rendering CardBook components */}
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {books.map((book) => (
          <div key={book.id} className="mx-2">
            <CardBook />
          </div>
        ))}
      </div>
      <hr />
      <p role="button" className=" text-end">
        Veiw all books <FontAwesomeIcon className=" px-1" icon={faArrowRight} />
      </p>
    </Container>
  );
}

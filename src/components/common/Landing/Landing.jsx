import { Container } from "react-bootstrap";

const urlImg = `https://www.gutenberg.org/cache/epub/74782/pg74782.cover.medium.jpg`;
import styles from "./styles.module.css";
const { imgContainer, fontPrata, content, paragraph, buttonRead } = styles;
export default function Landing() {
  return (
    <>
      <Container className={`d-flex pt-1 pb-1`}>
        <div className={`w-75 ${(fontPrata, content)}`}>
          <h1 className={fontPrata}>The fate of fenella</h1>
          <p className={`${paragraph} text-black-50`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis commodi, adipisci eius provident repellendus aspernatur
            officiis optio doloribus at, tempore perferendis voluptatibus hic
            impedit atque.
          </p>
          <button type="button" className={buttonRead}>
            Read
          </button>
        </div>
        <div className={`${imgContainer} w-100 d-flex`}>
          <img className="" src={urlImg} alt="" />
        </div>
      </Container>
    </>
  );
}

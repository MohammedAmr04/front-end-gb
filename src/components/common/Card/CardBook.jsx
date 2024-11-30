import styles from "./styles.module.css";
const urlImg = `https://www.gutenberg.org/cache/epub/74782/pg74782.cover.medium.jpg`;

const { containerImg, cardContainer } = styles;
export default function CardBook() {
  return (
    <>
      <div className={`${cardContainer}`}>
        <div className={`${containerImg}`}>
          <img src={urlImg} />
        </div>
        <h2 className=" text-center my-2">Book Title</h2>
        <p className="text-center text-black-50 my-2">Author Name</p>
      </div>
    </>
  );
}

import styles from "./styles.module.css";
const { headerMain } = styles;
export default function HeaderSection() {
  return (
    <div className=" text-center pt-5">
      <p className=" text-black-50 pb-3">Welcome to our website!</p>
      <h1 className={headerMain}>Featured Books</h1>
    </div>
  );
}

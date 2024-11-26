import styles from'./styles.module.css'
const urlImg =`https://www.gutenberg.org/cache/epub/74782/pg74782.cover.medium.jpg`

const { containerImg, cardContainer } = styles;
export default function CardBook() {
    return (
        <>
            <div className={`${cardContainer}`} >
                <div className={`${containerImg}`}>
                    <img src={urlImg} />
                </div>
                <div className={`text-center pt-2 pb-2`}>
                    <h2>Book Title</h2>
                </div>
            </div>
    </>
        )
}

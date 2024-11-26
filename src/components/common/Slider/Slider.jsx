import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from'./styles.module.css';
import CardBook from './../Card/CardBook';

const { borderBottomFit } = styles;
export default function Slider(props) {
    const books = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
    }));
    return (
        <div>
            <h2 className={borderBottomFit}>{props.title}</h2>
            <Swiper
                // Configure Swiper modules
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    // Screen width >= 320px: Show 1 book
                    320: {
                        slidesPerView: 1,
                    },
                    // Screen width >= 768px: Show 3 books
                    768: {
                        slidesPerView: 3,
                    },
                    // Screen width >= 1200px: Show 6 books
                    1200: {
                        slidesPerView: 6,
                    }
                }}
                className="swiper-container"
            >
                {/* SwiperSlide Components */}
                {books.map((book) => (
                    <SwiperSlide className='d-flex justify-content-center align-items-center' key={book.id}>
                        <CardBook />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

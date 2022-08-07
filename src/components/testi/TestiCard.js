import TestiCardData from "./TestiCardData";
import { TestiCardWrapper } from "./TestiCardStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TestiCard = () => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="pt-3 pb-5"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    TestiCardData.map((currValue) => {
                        const { id, img, name, job, review } = currValue;
                        return (
                            <SwiperSlide key={id}>
                                <TestiCardWrapper className="shadow">
                                    <blockquote className="px-4 py-5">
                                        " {review} "
                                    </blockquote>
                                    <div className="testi_info">
                                        <figure className="testi_img">
                                            <img src={img} alt="testi-img" />
                                        </figure>
                                        <h5 className="my-1">{name}</h5>
                                        <p className="m-0">{job}</p>
                                    </div>
                                </TestiCardWrapper>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    );
};

export default TestiCard;
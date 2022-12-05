import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <main className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
          THE NEW DULCINEA 6.0 HAS EVERTHING YOU-AND YOUR ACID MANTLE-NEED FOR A HEALTHY, HAPPY, AND TOTAL SKIN RESET.
          </span>
        </div>

        <img src={Hero} alt="testimonials" />
        <div className={css.container}>
          <span>100K</span>
          <span>Our happy customers</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousel}
          breakpoints={{
            856: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="testimonial" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Testimonials;

import css from "./Hero.module.css";
import heroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <section className={css.container}>
      {/*left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            20% off. Upgrade your collection with these must haves!
          </span>
        </div>
      </div>

      {/*middle side hero image */}

      <div className={css.wrapper}>
        {/*Blue circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={heroImg}
          alt="hero"
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/*right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>125k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

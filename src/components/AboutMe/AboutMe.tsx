import Container from "../../UI/Container/Container";
import styles from "./AboutMe.module.css";
import man_image from "../../images/leon.webp";
import Slider from '../Slider/Slider';

const AboutMe = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Hello! My name is Magzhan. I am frontend developer!
      </h1>
      <Container className={styles["about-me"]}>
        <div className={styles["about-me_left"]}>
          <div className={styles["left-title"]}>About Me</div>
          <div className={styles["left-text"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className={styles["about-me_right"]}>
          <img src={man_image} alt="Man" className={styles["right-img"]} />
        </div>
      </Container>
      <Slider />
    </>
  );
};

export default AboutMe;

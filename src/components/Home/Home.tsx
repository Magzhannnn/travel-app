import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, [navigate]);

  return (
    <>
      <div className={styles.home_background}></div>
      <Container className={styles.home}>
        <div className={styles["home-left"]}>
          <div className={styles["home-left_subtitle"]}>
            Best Destinations around the world
          </div>
          <div className={styles["home-left_title"]}>
            Travel, enjoy and live a new and full life
          </div>
          <div className={styles["home-left_text"]}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className={styles["buttons"]}>
            <Button
              title="Find out more"
              onClick={() => console.log("Hello World!!!")}
            />
            {isAuth && (
              <>
                <a
                  href="https://www.youtube.com/watch?v=BdinLXDoIJ4"
                  target="_blank"
                >
                  <div className={styles["play-btn"]}></div>
                </a>
                <div className={styles["play-btn_title"]}>Play Demo</div>
              </>
            )}
          </div>
        </div>
        <div className={styles["home-right"]}>
          <div className={styles["home-right_img1"]}></div>
          <div className={styles["home-right_img2"]}></div>
          <div className={styles["home-right_plane1"]}></div>
          <div className={styles["home-right_plane2"]}></div>
        </div>
      </Container>
    </>
  );
};

export default Home;

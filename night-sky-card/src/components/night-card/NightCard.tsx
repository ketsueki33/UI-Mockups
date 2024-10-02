import { MoonStar } from "lucide-react";
import LineButton from "../line-button/LineButton";
import styles from "./NightCard.module.css";

const NightCard = () => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.iconContainer}>
                <div className={styles.icon}>
                    <MoonStar size={35} />
                </div>
            </div>
            <div className={styles.cardContainer}>
                <h3 className={styles.cardTitle}>Night Sky Card</h3>
                <p className={styles.cardContent}>
                    Gaze into the mesmerizing night sky, where stars flicker and the moon
                    glows softly. Hover over the card to watch the night come alive with
                    twinkling stars and shooting stars, creating a celestial experience
                    right on your screen.
                </p>
                <div className={styles.cardFooter}>
                    <LineButton text="Fancy Button" linkTo="#" />
                </div>
                <img className={styles.tree} src="/trees-m.webp" alt="trees" />
                <span className={styles.shootingStar}></span>
                <span className={styles.shootingStar2}></span>
                <span className={styles.star + " " + styles.star1}></span>
                <span className={styles.star + " " + styles.star2}></span>
                <span className={styles.star + " " + styles.star3}></span>
                <span className={styles.star + " " + styles.star4}></span>
                <span className={styles.star + " " + styles.star5}></span>
                <span className={styles.star + " " + styles.star6}></span>
                <span className={styles.star + " " + styles.star7}></span>
                <span className={styles.star + " " + styles.star8}></span>
                <span className={styles.star + " " + styles.star9}></span>
                <span className={styles.star + " " + styles.star10}></span>
                <span className={styles.star + " " + styles.star11}></span>
                <span className={styles.star + " " + styles.star12}></span>
                <span className={styles.star + " " + styles.star13}></span>
                <span className={styles.star + " " + styles.star14}></span>
                <span className={styles.star + " " + styles.star15}></span>
            </div>
        </div>
    );
};
export default NightCard;

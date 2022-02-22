import react from "react";
import styles from "../styles/Home.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <a href={props.cardList.link}>
        <h2>{props.cardList.title} &rarr;</h2>
        <p>{props.cardList.description}</p>
      </a>
    </div>
  );
};

export default Card;

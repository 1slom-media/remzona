import styles from "./portfolio-card.module.css";

export const PortfolioCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="portfolio image" />
      <div className={styles.card_bottom}>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

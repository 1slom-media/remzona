import styles from "./portfolio-card.module.css";

export const PortfolioCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="portfolio image" />
      <div className={styles.card_bottom}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

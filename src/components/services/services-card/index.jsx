import styles from "./services-card.module.css";

export const ServicesCard = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.image} alt="" />
        <div className={styles.card_bottom}>
            <div className={styles.card_bootom_box}>
                <div></div>
                <h3>{props.title}</h3>
            </div>
            <p>{props.text}</p> 
        </div>
    </div>
  );
};

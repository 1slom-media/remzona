import styles from "./comments-card.module.css";
import {AiFillStar} from 'react-icons/ai'

export const CommentsCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        <AiFillStar size={9} style={{color:"#DFB300"}}/>
        <AiFillStar size={9} style={{color:"#DFB300"}}/>
        <AiFillStar size={9} style={{color:"#DFB300"}}/>
        <AiFillStar size={9} style={{color:"#DFB300"}}/>
        <AiFillStar size={9} style={{color:"#DFB300"}}/>
      </div>
      <p>{props.text}</p>
      <h4>{props.name}</h4>
    </div>
  );
};

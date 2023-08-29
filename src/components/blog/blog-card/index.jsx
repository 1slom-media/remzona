import styles from './blog-card.module.css'

export const BlogCard=(props)=>{
    return(
        <div className={styles.card} >
            <div className={styles.img_box}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.content_box}>
                <div className={styles.date_box}>
                    <h4>{props.date}</h4>
                    <p>{props.month}</p>
                </div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
import React from "react";
import styles from "./comments.module.css";
import { BigContainer } from "../../style-app";
import { Col, Row } from "react-grid-system";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { useTranslation } from "react-i18next";
import { CommentsCard } from "./comments-card";

const Comments = () => {
  const { t } = useTranslation();

  const comments=[
    {
        id:1,
        text:t("Comments.2"),
        name:t("Comments.3")
    },
    {
        id:2,
        text:t("Comments.4"),
        name:t("Comments.5")
    },
    {
        id:3,
        text:t("Comments.6"),
        name:t("Comments.7")
    },
  ]
  return (
    <div className={styles.comments} id="Comments">
      <BigContainer>
        <div className={styles.comments_heading}>
          <img src={left} alt="left arrow" />
          <h4>{t("Comments.0")}</h4>
          <img src={right} alt="right arrow" />
        </div>
        <h2 className={styles.comments_title}>{t("Comments.1")}</h2>
        <Row className={styles.comments_row}>
            {comments.map(comment=>(
                <Col className={styles.comments_col} key={comment.id}>
                    <CommentsCard name={comment.name} text={comment.text} />
                </Col>
            ))}
        </Row>
      </BigContainer>
    </div>
  );
};

export default Comments;

import React from "react";
import styles from "./hero.module.css";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import { FiClock } from "react-icons/fi";

const HeroCommon = ({
  heroTitle,
  heroText,
  heroBtn,
  isBtn,
  id,
  className,
  lastText,
}) => {
  return (
    <>
      <div className={`${styles.hero_section} ${className}`}>
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col
              className={styles.home_hero_col}
              lg={10}
              md={8}
              sx={12}
              sm={12}
            >
              <h1>{heroTitle}</h1>
              <p className={styles.hero_text}>{heroText}</p>
              <div className={styles.hero_buttons}>
                {isBtn === true ? <a href="tel:+998946780008">{heroBtn}</a> : null}
              </div>
              <p className={styles.hero_last_text}>
                <FiClock size={30} style={{color:"#05B968"}}/>
                {""}
                {lastText}
              </p>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default HeroCommon;

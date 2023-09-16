import React from "react";
import styles from "./about.module.css";
import { BigContainer } from "../../style-app";
import { Col, Row } from "react-grid-system";
import aboutImg from "../../assets/about_1.png";
import masterImg from "../../assets/master_icon.svg";
import left from "../../assets/left.svg";
import { useTranslation } from "react-i18next";

const About = () => {
    const {t}=useTranslation()
  return (
    <div className={styles.about} id="About">
      <BigContainer>
        <Row className={styles.about_row}>
          <Col lg={4} md={5} sx={12} sm={12} className={styles.about_left_col}>
            <img src={aboutImg} alt="about img" />
            <div className={styles.about_left_content}>
              <img src={masterImg} alt="master icon" />
              <h5>{t("About.0")}</h5>
            </div>
          </Col>
          <Col lg={5} md={5} sx={12} sm={12} className={styles.about_right_col}>
            <div className={styles.about_heading}>
              <img src={left} alt="left arrow" />
              <h4>{t("About.1")}</h4>
            </div>
            <h2>{t("About.2")}</h2>
            <h4>
            {t("About.3")}
            </h4>
          </Col>
        </Row>
      </BigContainer>
    </div>
  );
};

export default About;

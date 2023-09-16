import React from "react";
import styles from "./advantages.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import left from "../../assets/left.svg";
import { Row, Col } from "react-grid-system";
import settings from "../../assets/technician.svg.svg";
import masterIcon from "../../assets/master-icon.svg";
import piston from "../../assets/pistons.svg.svg";
import advantagesImg from "../../assets/advantages1.png";
import { FiPhoneCall } from "react-icons/fi";

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.advantages} id="Advantages">
      <BigContainer>
        <Row className={styles.advantages_row}>
          <Col className={styles.advantages_col}>
            <div className={styles.advantages_heading}>
              <img src={left} alt="left arrow" />
              <h4>{t("Advantages.0")}</h4>
            </div>
            <h2>
            {t("Advantages.1")}
            </h2>
            <div className={styles.advantages_cards}>
              <div className={styles.advantages_card}>
                <img src={settings} alt="settings icon" />
                <h5 style={{whiteSpace: "pre-wrap"}}> {t("Advantages.2")}</h5>
                <p style={{whiteSpace: "pre-wrap"}}>{t("Advantages.3")}</p>
              </div>
              <div className={styles.advantages_card}>
                <img src={masterIcon} alt="master icon" />
                <h5> {t("Advantages.4")}</h5>
                <p style={{whiteSpace: "pre-wrap"}}>{t("Advantages.5")}</p>
              </div>
              <div className={styles.advantages_card}>
                <img src={piston} alt="porshon icon" />
                <h5>{t("Advantages.6")}</h5>
                <p style={{whiteSpace: "pre-wrap"}}>{t("Advantages.7")}</p>
              </div>
            </div>
            {/* <h4>{t("Advantages.8")}</h4> */}
            {/* <div className={styles.advantages_line}>
              <div></div>
            </div> */}
            <div className={styles.advantages_contact}>
              <div className={styles.advantages_contact_phone}>
                <FiPhoneCall size={30} style={{ color: "#eb3000" }} />
              </div>
              <div className={styles.advantages_contact_content}>
                <h6>{t("Advantages.9")}</h6>
                <a href="tel:+998946780008">+998946780008</a>
              </div>
            </div>
          </Col>
          <Col className={styles.advantages_right_col}>
            <div className={styles.advantages_right_wrapper}>
              <img src={advantagesImg} alt="advantages image" />
              <div className={styles.advantages_right_content}>
                <h4>14 000+</h4>
                <p>{t("Advantages.10")}</p>
              </div>
            </div>
          </Col>
        </Row>
      </BigContainer>
    </div>
  );
};

export default Advantages;

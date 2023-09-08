import React from "react";
import styles from "./footer.module.css";
import { BigContainer } from "../../style-app";
import { Col, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
// import logo from "../../assets/remzona.svg";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { RiMailOpenLine } from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.footer_top}>
        <BigContainer>
          <Row className={styles.footer_row}>
            <Col>
              <a className={styles.footer_logo} href="/">
                {/* <img src={logo} alt="" /> */}
                Remzona
              </a>
              <div className={styles.footer_socials}>
                <a href="https://www.facebook.com/profile.php?id=61550486501291">
                  <BiLogoFacebook className={styles.footer_socials_icon} />
                </a>
                <a href="https://t.me/remzona_uzz">
                  <BiLogoTelegram className={styles.footer_socials_icon} />
                </a>
                <a href="https://www.instagram.com/remzonauzz/">
                  <BiLogoInstagram className={styles.footer_socials_icon} />
                </a>
              </div>
            </Col>
            <Col className={styles.footer_last_col}>
              <h2>{t("Footer.0")}</h2>
              <div className={styles.footer_line}></div>
              <div className={styles.footer_contact}>
                <FiClock size={25} color="#eb3000" />
                <div>
                  <p>{t("Footer.1")}</p>
                  <h6>{t("Footer.2")}</h6>
                </div>
              </div>
              <div className={styles.footer_contact}>
                <FiPhoneCall size={25} color="#eb3000" />
                <div>
                  <a href="tel:+998951330008">+998951330008</a> <br />
                  <br />
                  <a href="tel:+998946780008">+998946780008</a>
                </div>
              </div>
              <div className={styles.footer_contact}>
                <RiMailOpenLine size={25} color="#eb3000" />
                <div>
                  <p>{t("Footer.4")}</p>
                  <a href="mailto:remzonauz2023@gmail.com">remzonauz2023@gmail.com</a>
                </div>
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
      <div className={styles.footer_bottom}>
        <BigContainer>
          <a href="https://supersite.uz">{t("Footer.5")}</a>
        </BigContainer>
      </div>
    </div>
  );
};
export default Footer;

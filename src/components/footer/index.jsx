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
                  <a href="mailto:remzonauz2023@gmail.com">
                    remzonauz2023@gmail.com
                  </a>
                </div>
              </div>
            </Col>
            <Col className={styles.map_col}>
              <div className={styles.footer_map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11991.383023356178!2d69.361119!3d41.2904613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5ccce47d701%3A0x9ba0b1c166c50864!2sREMZONA!5e0!3m2!1sru!2s!4v1694446989948!5m2!1sru!2s"
                  width="500"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>
          </Row>
        </BigContainer>
      </div>
      <div className={styles.footer_bottom}>
        <BigContainer>
          <a href="https://supersite.uz">{t("Footer.5")}</a>
          <a
            href="http://www.search.uz/"
            className={styles.hidden}
            title="Узбекистан"
          >
            Search.uz: интернет каталог сайтов Узбекистана
          </a>
        </BigContainer>
      </div>
    </div>
  );
};
export default Footer;

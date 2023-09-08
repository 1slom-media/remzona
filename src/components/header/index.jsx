import React, { useState } from "react";
import styles from "./header.module.css";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { RiMailOpenLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { BsArrowRightShort } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import {
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoInstagram,
} from "react-icons/bi";
import LanguageHeader from "./header-language";
import { BigContainer } from "../../style-app";
import { Button } from "../common/button-common";
import LogoImg from "../../assets/remzona.svg";

const Header = () => {
  const { t } = useTranslation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <div className={styles.header}>
        <Row className={styles.header_top}>
          <BigContainer>
            <Row className={styles.header_top_row}>
              <ul className={styles.header_list}>
                <li className={styles.header_item}>
                  <RiMailOpenLine className={styles.header_adress_icon} />
                  <a href="mailto:remzonauz2023@gmail.com">remzonauz2023@gmail.com</a>
                </li>
                <li className={styles.header_item}>
                  <FiClock className={styles.header_adress_icon} />
                  <p>{t("Header.0")}</p>
                </li>
                <li className={styles.header_item}>
                  <SlLocationPin className={styles.header_adress_icon} />
                  <p>{t("Header.1")}</p>
                </li>
                <li className={`${styles.header_item} ${styles.header_social}`}>
                  <a href="https://www.facebook.com/profile.php?id=61550486501291">
                    <BiLogoFacebook className={styles.header_socials_icon} />
                  </a>
                  <a href="https://t.me/remzona_uzz">
                    <BiLogoTelegram className={styles.header_socials_icon} />
                  </a>
                  <a href="https://www.instagram.com/remzonauzz/">
                    <BiLogoInstagram className={styles.header_socials_icon} />
                  </a>
                </li>
              </ul>
            </Row>
          </BigContainer>
        </Row>
        <div className={styles.header_bottom}>
          <BigContainer>
            <Row className={styles.header_bottom_row}>
              <Col className={styles.logo} lg={2} md={2} sx={6} sm={6}>
                <a href="/">
                  <img src={LogoImg} alt="" />
                </a>
              </Col>
              <Col
                className={
                  click
                    ? ` ${styles.header_bottom_list} ${styles.header_bottom_list_active}`
                    : `${styles.header_bottom_list}`
                }
              >
                <Col lg={9} md={9} sx={8} sm={8} className={styles.header_nav}>
                  <a onClick={closeMenu} href="#About">
                    {t("Header.2")}
                  </a>
                  <a onClick={closeMenu} href="#Services">
                    {t("Header.3")}
                  </a>
                  <a onClick={closeMenu} href="#Advantages">
                    {t("Header.4")}
                  </a>
                  <a onClick={closeMenu} href="#Portfolio">
                    {t("Header.5")}
                  </a>
                  <a onClick={closeMenu} href="#Comments">
                    {t("Header.6")}
                  </a>
                  <a onClick={closeMenu} href="#Blog">
                    {t("Header.7")}
                  </a>
                  <LanguageHeader />
                </Col>
                <div>
                  <a onClick={closeMenu} href="#Form">
                    <Button  className={styles.header_btn}>
                      {t("Header.8")}{" "}
                      <BsArrowRightShort className={styles.header_btn_icon} />
                    </Button>
                  </a>
                </div>
                <ul
                  className={`${styles.header_list} ${styles.header_top_response}`}
                >
                  <li className={styles.header_item}>
                    <RiMailOpenLine className={styles.header_adress_icon} />
                    <a href="mailto:remzonauz2023@gmail.com">remzonauz2023@gmail.com</a>
                  </li>
                  <li className={styles.header_item}>
                    <FiClock className={styles.header_adress_icon} />
                    <p>{t("Header.0")}</p>
                  </li>
                  <li className={styles.header_item}>
                    <SlLocationPin className={styles.header_adress_icon} />
                    <p>{t("Header.1")}</p>
                  </li>
                  <li
                    className={`${styles.header_item} ${styles.header_social}`}
                  >
                  <a href="https://www.facebook.com/profile.php?id=61550486501291">
                    <BiLogoFacebook className={styles.header_socials_icon} />
                  </a>
                  <a href="https://t.me/remzona_uzz">
                    <BiLogoTelegram className={styles.header_socials_icon} />
                  </a>
                  <a href="https://www.instagram.com/remzonauzz/">
                    <BiLogoInstagram className={styles.header_socials_icon} />
                  </a>
                  </li>
                </ul>
              </Col>
              <div>
                <Button className={styles.menu_btn} onClick={handleClick}>
                  {click ? (
                    <CgClose className={styles.hamburger_icon} />
                  ) : (
                    <GiHamburgerMenu className={styles.hamburger_icon} />
                  )}
                </Button>
              </div>
            </Row>
          </BigContainer>
        </div>
      </div>
    </>
  );
};

export default Header;

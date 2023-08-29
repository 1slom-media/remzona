import React from "react";
import styles from "./banner.module.css";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import { Button } from "../common/button-common";
import { BsArrowRightShort } from "react-icons/bs";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <BigContainer>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <h2>{t("Banner.0")}</h2>
          <a href="#Form">
            <Button className={styles.banner_btn}>
              {t("Banner.1")}{" "}
              <BsArrowRightShort size={20} style={{ color: "black" }} />{" "}
            </Button>
          </a>
        </div>
      </div>
    </BigContainer>
  );
};

export default Banner;

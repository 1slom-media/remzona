import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";
import styles from './style.module.css'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroTitle={t("Hero.0")}
        isBtn={true}
        heroText={t("Hero.1")}
        heroBtn={<Button className={styles.hero_btn}>{t("Hero.2")}</Button>}
        lastText={t("Hero.3")}
      />
    </>
  );
};

export default Hero;

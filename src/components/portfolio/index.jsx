import React, { useEffect } from "react";
import styles from "./porfolio.module.css";
import { BigContainer } from "../../style-app";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { PortfolioCard } from "./portfolio-card";
import { useDispatch, useSelector } from "react-redux";
import { PortfolioGet } from "../../redux/portfolio";

const Portfolio = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const portfolioGetState = useSelector((state) =>
    state.portfolio.portfolioGet?.data
  );

  useEffect(() => {
    dispatch(PortfolioGet())
  }, [])

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const portfolios=portfolioGetState

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: portfolios.length<=2 ? portfolios.length:3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    rows: 1,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: portfolios.length<=2 ? portfolios.length:2,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.portfolio} id="Portfolio">
      <BigContainer>
        <div className={styles.portfolio_heading}>
          <img src={left} alt="left arrow" />
          <h4>{t("Portfolio.0")}</h4>
          <img src={right} alt="right arrow" />
        </div>
        <h2 className={styles.portfolio_title}>
        {t("Portfolio.1")}
        </h2>

        <Slider {...settings}>
          {portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              title={LangVal() == "ru"
              ? portfolio.title_ru
              : LangVal() == "uz"
                ? portfolio.title_uz
                  : portfolio.title_ru}
              image={portfolio.image}
            />
          ))}
        </Slider>
      </BigContainer>
    </div>
  );
};

export default Portfolio;

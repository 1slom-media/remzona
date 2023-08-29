import React, { useEffect } from "react";
import styles from "./blog.module.css";
import { BigContainer } from "../../style-app";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import img from "../../assets/services1.png";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { BlogCard } from "./blog-card";
import "./style.css";
import { BlogGet } from "../../redux/blog";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const blogGetState = useSelector((state) => state.blog.blogGet?.data);

  useEffect(() => {
    dispatch(BlogGet());
  }, []);

  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: blogGetState.length <=2 ? blogGetState.length : 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: blogGetState.length <=2 ? blogGetState.length : 2,
          slidesToScroll: 2,
          rows: 1,
          dots: false,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.blog} id="Blog">
      <BigContainer>
        <div className={styles.blog_heading}>
          <img src={left} alt="" />
          <h4>{t("Blog.0")}</h4>
          <img src={right} alt="" />
        </div>
        <h2 className={styles.blog_title}>{t("Blog.1")}</h2>
        <Slider {...settings}>
          {blogGetState.map((blog) => (
            <BlogCard
              key={blog.id}
              title={
                LangVal() == "ru"
                  ? blog.title_ru
                  : LangVal() == "uz"
                  ? blog.title_uz
                  : blog.title_ru
              }
              text={
                LangVal() == "ru"
                  ? blog.description_ru
                  : LangVal() == "uz"
                  ? blog.description_uz
                  : blog.description_ru
              }
              date={blog.date}
              month={
                LangVal() == "ru"
                  ? blog.month_ru
                  : LangVal() == "uz"
                  ? blog.month_uz
                  : blog.month_ru
              }
              image={blog.image}
            />
          ))}
        </Slider>
      </BigContainer>
    </div>
  );
};

export default Blog;

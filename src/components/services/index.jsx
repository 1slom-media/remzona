import React from "react";
import styles from "./services.module.css";
import { BigContainer } from "../../style-app";
import { Col, Row } from "react-grid-system";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { useTranslation } from "react-i18next";
import { ServicesCard } from "./services-card";
import servicesImage1 from "../../assets/services1.png";
import servicesImage2 from "../../assets/services2.png";
import servicesImage3 from "../../assets/services3.png";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      title: t("Services.2"),
      text: t("Services.3"),
      image: servicesImage1,
    },
    {
      id: 2,
      title: t("Services.4"),
      text: t("Services.5"),
      image: servicesImage2,
    },
    {
      id: 3,
      title: t("Services.6"),
      text: t("Services.7"),
      image: servicesImage3,
    },
  ];
  return (
    <div className={styles.services} id="Services">
      <BigContainer>
        <div className={styles.services_wrapper}>
          <div className={styles.services_heading}>
            <img src={left} alt="" />
            <h4>{t("Services.0")}</h4>
            <img src={right} alt="" />
          </div>
          <h2>{t("Services.1")}</h2>
        </div>
        <Row className={styles.services_row}>
          {services.map((service) => (
            <Col className={styles.service_col} key={service.id}>
              <ServicesCard title={service.title} text={service.text} image={service.image} />
            </Col>
          ))}
        </Row>
      </BigContainer>
    </div>
  );
};

export default Services;

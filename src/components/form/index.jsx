import React from "react";
import styles from "./form.module.css";
import { BigContainer } from "../../style-app";
import { Col, Row } from "react-grid-system";
import left from "../../assets/left.svg";
import { useTranslation } from "react-i18next";
import { FiPhoneCall } from "react-icons/fi";
import { CardForm } from "./car-form";

const Form = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.form} id="Form">
      <BigContainer>
        <Row className={styles.form_row}>
          <Col className={styles.form_left_col}>
            <div className={styles.form_heading}>
              <img src={left} alt="" />
              <h4>{t("Form.0")}</h4>
            </div>
            <h2>{t("Form.1")}</h2>
            <p>{t("Form.2")}</p>
            <div className={styles.form_contact}>
              <div className={styles.form_contact_phone}>
                <FiPhoneCall size={30} style={{ color: "#eb3000" }} />
              </div>
              <div className={styles.form_contact_content}>
                <h6>{t("Form.3")}</h6>
                <a href="tel:+998946780008">+998946780008</a>
              </div>
            </div>
          </Col>
          <Col>
            <CardForm />
          </Col>
        </Row>
      </BigContainer>
    </div>
  );
};

export default Form;

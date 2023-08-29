import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common";
import { BiUser, BiPhoneCall } from "react-icons/bi";
import { RiMailOpenLine } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./card-form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PostContact } from "../../../redux/contact";
import { message } from "antd";
import { useEffect } from "react";

export const CardForm = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [coment, setComent] = useState("");
  const [disableds, setDisableds] = useState(true);

  const contactPost = useSelector((state) => state.contact);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";


  const HandleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      PostContact({
        full_name: fullName,
        phone: phone,
        email: mail,
        message: coment,
      })
    );

    setFullName(null);
    setPhone(null);
    setMail(null);
    setComent(null);
    setDisableds(true);
  };
  
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
      style: {
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "500",
      },
    });
    if(contactPost.postContact.Success == true || contactPost.postContact.Error == false){
      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: t("Form.8"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500",
          },
        });
      }, 2500)
    }else{
      setTimeout(() => {
        messageApi.open({
          key,
          type: "error",
          content: t("Form.9"),
          duration: 2,
          style: {
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "500",
          },
        });
      }, 2500);
    }
  };

  useEffect(() => {
    !phone || !fullName || !mail || !coment
      ? setDisableds(true)
      : setDisableds(false);
  }, [coment, phone, fullName, mail]);

  return (
    <div className={styles.card}>
      <h3>{t("Form.4")}</h3>
      <form onSubmit={HandleSubmit} className={styles.form}>
        <label htmlFor="name">
          <BiUser size={16} color="#eb3000" />
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
            placeholder={t("Form.5")}
          />
        </label>
        <label htmlFor="email">
          <RiMailOpenLine size={16} color="#eb3000" />
          <input
            type="email"
            name="email"
            value={mail}
            onChange={(e) => setMail(e.currentTarget.value)}
            placeholder={t("Form.6")}
          />
        </label>
        <label htmlFor="phone">
          <BiPhoneCall size={16} color="#eb3000" />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
            name="phone"
            placeholder={t("Form.7")}
          />
        </label>
        <label htmlFor="message">
          <FiMessageCircle size={16} color="#eb3000" />
          <textarea
            value={coment}
            name="message"
            type="text"
            onChange={(e) => setComent(e.currentTarget.value)}
          ></textarea>
        </label>
        {contextHolder}
        <Button
          onClick={openMessage}
          className={styles.btn}
        >
          {t("Form.4")} <BsArrowRightShort size={20} />
        </Button>
      </form>
    </div>
  );
};

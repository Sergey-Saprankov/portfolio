import React from "react";
import s from "./Contacts.module.scss";
import Title from "../Title/Title";
import location from "./img/location.svg";
import telephone from "./img/telephone.svg";
import email from "./img/email.svg";
import telegram from "./img/telegram.svg";
import { useForm } from "react-hook-form";
import { json } from "react-router-dom";
import axios from "axios";

const Contacts = ({ color, colorList }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    axios
      .post(`https://formspree.io/f/xdovaann`, data)
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={s.container}>
      <div className={s.animate}></div>
      <Title title={"Contacts"} />

      <div className={s.contentSection}>
        <div className={s.infoSection}>
          <div className={s.contactsBlock}>
            <a className={s.link} href={"#"}>
              <div className={s.imgContainer}>
                <img className={s.img} src={location} alt="location" />
              </div>
              <div className={s.contactsBlockTitle}>Belarus, Zhlobin</div>
            </a>
          </div>
          <div className={s.contactsBlock}>
            <a className={s.link} href={"tel:+375293558603"}>
              <div className={s.imgContainer}>
                <img className={s.img} src={telephone} alt="telephone" />
              </div>

              <div className={s.contactsBlockTitle}>+375 ( 29 ) 355-86-03</div>
            </a>
          </div>
          <div className={s.contactsBlock}>
            <a className={s.link} href={"mailto:sergeysaprankov1992@gmail.com"}>
              <div className={s.imgContainer}>
                <img className={s.img} src={email} alt="email" />
              </div>
              <div className={s.contactsBlockTitle}>
                sergeysaprankov1992@gmail.com
              </div>
            </a>
          </div>
          <div className={s.contactsBlock}>
            <a
              className={s.link}
              target={"_blank"}
              href={" https://www.t.me/sergeysaprankov"}
            >
              <div className={s.imgContainer}>
                <img className={s.img} src={telegram} alt="telegram" />
              </div>
              <div className={s.contactsBlockTitle}>@sergeysaprankov</div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={s.formSection}>
          <div className={s.inputBlock}>
            <input
              {...register("firstName", {
                required: true,
                minLength: 2,
                pattern: /^[A-Za-z]+$/i,
              })}
              className={
                errors.firstName
                  ? `${s.input} ${s.error}`
                  : `${s.input} ${s.success}`
              }
              type="text"
              placeholder={"Name"}
            />
            <input
              {...register("email", {
                required: true,
                minLength: 2,
                pattern: /^[A-Za-z]+$/i,
              })}
              className={
                errors.email
                  ? `${s.input} ${s.error}`
                  : `${s.input} ${s.success}`
              }
              type="text"
              placeholder={"Email"}
            />
          </div>

          <textarea
            {...register("text", {
              required: true,
              minLength: 1,
              pattern: /^[A-Za-z]+$/i,
            })}
            className={
              errors.text
                ? `${s.textArea} ${s.error}`
                : `${s.textArea} ${s.success}`
            }
            cols="10"
            rows="10"
            placeholder={"Message"}
          ></textarea>

          <button
            style={{ background: colorList[color] }}
            className={s.submitBtn}
            type={"submit"}
            disabled={!isValid}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;

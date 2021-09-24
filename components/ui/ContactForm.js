import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import axios from "axios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function Form() {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    console.log("data: ", data);
    try {
      const apiUrl = "https://sheltered-earth-62986.herokuapp.com/messages";
      const formData = new FormData();

      console.log(formData);

      formData.append("data", JSON.stringify(data.name));
      const resp = await axios.post(
        "https://sheltered-earth-62986.herokuapp.com/messages",
        {
          name: data.name,
          message: data.message,
          email: data.email,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMyMTM4NDMyLCJleHAiOjE2MzQ3MzA0MzJ9.yTmVgIhAdg_5X85QERXcCz8n2WsB8fv3Erxw9gIkivY",
          },
        }
      );

      setSuccess("Successfully sent message");
      console.log(data);
      console.log(resp.data);
    } catch (error) {
      setSuccess("Message was not sent");
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
        <input placeholder="Mail" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <textarea placeholder="Message" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
        <input
          type="submit"
          value="send"
          onClick={() =>
            window.setTimeout(function () {
              location.reload();
            }, 1500)
          }
        />
      </form>
      <div className="success">{success}</div>
    </>
  );
}

export default Form;

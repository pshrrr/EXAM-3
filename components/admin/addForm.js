import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Name must be at least 3 characters"),
  work: yup
    .string()
    .required("Please enter the work youve done")
    .min(10, "Work must be at least 10 characters"),
  url: yup
    .string()
    .required("Please enter your name")
    .min(4, "Url must be at least 4 characters"),
  img_url: yup
    .string()
    .required("Please enter your name")
    .min(4, "Url must be over 4 characters"),
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
      const apiUrl = "https://sheltered-earth-62986.herokuapp.com/projects";
      const formData = new FormData();

      console.log(formData);

      formData.append("data", JSON.stringify(data.name));
      const resp = await axios.post(
        "https://sheltered-earth-62986.herokuapp.com/projects",
        {
          name: data.name,
          work: data.work,
          img_url: data.img_url,
          URL: data.url,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMyMTM4NDMyLCJleHAiOjE2MzQ3MzA0MzJ9.yTmVgIhAdg_5X85QERXcCz8n2WsB8fv3Erxw9gIkivY",
          },
        }
      );
      setSuccess("Successfully added a project to api");
      console.log(data);
      console.log(resp.data);
    } catch (error) {
      setSuccess("Project was not uploaded to api, check console");
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <textarea placeholder="Work" {...register("work")} />
        {errors.work && <span>{errors.work.message}</span>}

        <input placeholder="IMAGE URL" {...register("img_url")} />
        {errors.image_url && <span>{errors.image_url.message}</span>}

        <input placeholder="URL" {...register("url")} />
        {errors.url && <span>{errors.url.message}</span>}

        <input type="submit" value="add" />
      </form>
      <div className="success">{success}</div>
    </>
  );
}

export default Form;

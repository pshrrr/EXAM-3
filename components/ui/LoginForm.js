import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/router";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "You have to enter an valid email"
    ),

  password: yup
    .string()
    .required("Password must have at least 4 characters")
    .min(4),
});

function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    const url = "https://sheltered-earth-62986.herokuapp.com/auth/local";
    console.log(data);
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      window.localStorage.setItem("jwt", JSON.stringify(response.data));
      router.push("/admin");
    } catch (error) {
      console.log("error", error);
    }
  }

  console.log(errors);

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          type="identifier"
          {...register("identifier")}
        />
        {errors.identifier && <span>{errors.identifier.message}</span>}

        <input
          placeholder="Password"
          name="password"
          type="password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Register;

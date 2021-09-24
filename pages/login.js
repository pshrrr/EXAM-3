import Meta from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/ui/LoginForm";

export default function login() {
  return (
    <Layout>
      <Meta title="LOGIN ADMIN" description="Our loginpage for admin" />

      <div className="login-box">
        <h1>Login Admin</h1>

        <LoginForm />
      </div>
    </Layout>
  );
}

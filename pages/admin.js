import Head from "next/head";
import Layout from "../components/layout/Layout";
import Form from "../components/admin/addForm";
import Messages from "../components/admin/messages";

import LogoutButton from "../components/ui/LogoutButton";

const Admin = ({ admin }) => {
  return (
    <>
      <Layout>
        <Head title="FABRKN" description="Our admin page" />

        <h1 className="adminh1">welcome admin</h1>

        <div className="form-box">
          <h2>Add PROJECT</h2>
          <div className="kortstrek"></div>

          <Form></Form>
        </div>

        <div className="form-box">
          <h2>Messages</h2>
          <div className="kortstrek"></div>
        </div>
        <div className="msg-box">
          <Messages></Messages>
        </div>

        <LogoutButton></LogoutButton>
      </Layout>
    </>
  );
};

export default Admin;

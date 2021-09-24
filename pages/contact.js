import Meta from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/ui/ContactForm";

export default function contact() {
  return (
    <Layout>
      <Meta title="CONTACT US" description="Our contact information" />
      <h1 className="regh1">Contact us</h1>
      <div className="contact">
        <div className="contact-box">
          <h2>Developer Team</h2>
          <div className="kortstrek"></div>
          <p>+ 47 41 00 42 02</p>
          <p>developer@fabrkn.no</p>
        </div>

        <div className="contact-box">
          <h2>Design Team</h2>
          <div className="kortstrek"></div>
          <p>+ 47 41 00 42 02</p>
          <p>design@fabrkn.no</p>
        </div>

        <div className="contact-box">
          <h2>Management</h2>
          <div className="kortstrek"></div>
          <p>+ 47 41 00 42 02</p>
          <p>erik@fabrkn.no</p>
        </div>
      </div>

      <div className="form-box">
        <h2>Message us</h2>
        <div className="kortstrek"></div>

        <ContactForm></ContactForm>
      </div>
    </Layout>
  );
}

import Meta from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import logosvart from "../public/images/logosvart.png";
import visit from "../public/images/visit.jpg";
import create from "../public/images/create.jpg";
import design from "../public/images/design.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Meta title="FABRKN" description="Our Homepage" />

      <div className="animation">
        <h1 className="typewriter">HELLO,WE ARE FABRKN.</h1>

        <h3>
          WE BELIEVE IN CREATIVE WEB SOLUTIONS AND DESIGN. AND WE CREATE
          TAILOR-MADE COOL STUFF FOR PEOPLE AND COMPANIES
        </h3>
      </div>

      <div className="strek"></div>

      <div className="flex">
        <div className="flex-boxes">
          <Image src={create} alt="create written in a creative way" />
          <a href="/projects">
            <button className="btn draw-border">Create</button>
          </a>
        </div>

        <div className="flex-boxes">
          <Image src={design} alt="design process in progress" />
          <a href="/projects">
            <button className="btn draw-border">Projects</button>
          </a>
        </div>

        <div className="flex-boxes">
          <Image src={visit} alt="picture of a blank visitator card" />
          <a href="/projects">
            <button className="btn draw-border">IDENTITY</button>
          </a>
        </div>
      </div>

      <div className="strek"></div>

      <div className="animation">
        <h3>
          We are a newly started company , which will focus solely on the
          customer and their needs.
        </h3>
      </div>

      <div className="animation">
        <h3>
          The website and company is currently under development so stay tuned
        </h3>
      </div>

      <div className="strek"></div>
    </Layout>
  );
}

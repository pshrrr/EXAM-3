import Head from "next/head";
import Layout from "../../components/layout/Layout";

function Detail({ result }) {
  return (
    <Layout>
      <div className="details">
        <div className="detailinfo">
          <h2>Work :</h2>
          <p> {result.work} </p>
          <h2>Date :</h2>
          <p> {result.date} </p>
          <h2>URL :</h2>
          <a href={result.URL}>{result.URL} </a>
        </div>
        <div className="detailimage">
          <img src={result.img_url} alt="avatar" width={600}></img>
        </div>
        <a href="/projects">
          <button className="btn draw-border">BACK</button>
        </a>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(content) {
  const res = await fetch(
    `https://sheltered-earth-62986.herokuapp.com/projects/${content.params.id}`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}

export default Detail;

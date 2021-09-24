import Meta from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Projects() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-earth-62986.herokuapp.com/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout>
        <Meta title="OUR PROJECTS" description="Showcasing our projects" />
        <h1 className="regh1">PROJECTS</h1>

        <div className="strek-2"></div>

        <div className="flex-2">
          {items.map((project) => (
            <div className="card" key={project.id}>
              <div className="card-text">
                <h4>{project.name}</h4>
                <p>{project.work}</p>
                <img
                  src={project.img_url}
                  alt="Company Picture"
                  width="150px"
                ></img>
              </div>

              <Link href="/details/[id]" as={`/details/${project.id}`}>
                <button className="btn">Read more</button>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default Projects;

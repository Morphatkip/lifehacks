import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { categories } from "./Categories";
import { SingleTemplateHolder } from "../components/Holder";
import Footer from "../components/footer";

function Templates() {
  const [template, setTemplate] = useState({});

  const { state } = useLocation();
  useEffect(() => {
    const templatePassed = categories.find(
      (category) => category?.id === state.id
    );
    setTemplate(templatePassed);
  }, [state.id]);

  return (
    <div>
      <div className="page-heading">
        <Navbar />
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>{template.title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SingleTemplateHolder
          key={template.title}
          title={template.title}
          image={template.image}
          price={template.price}
          rating={template.rating}
          downloadSrc={template.downloadSrc}
          previewLink={template.previewLink}
          id={template.id}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Templates;

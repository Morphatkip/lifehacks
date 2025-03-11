import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { categories } from "./Categories";
import { SingleTemplateHolder } from "../components/Holder";
import Footer from "../components/footer";

function Templates() {
  const [template, setTemplate] = useState(null);
  const { templateId } = useParams(); // Get the templateId from the URL

  useEffect(() => {
    const templatePassed = categories.find(
      (category) => category?.id === Number(templateId) // Ensure correct data type
    );
    setTemplate(templatePassed);
  }, [templateId]);

  if (!template) {
    return <h2>Template not found</h2>; // Handle missing template gracefully
  }

  return (
    <div>
      <div className="page-heading">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>{template.title}</h2>
            </div>
          </div>
        </div>
      </div>

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

      <Footer />
    </div>
  );
}

export default Templates;

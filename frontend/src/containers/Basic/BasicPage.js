import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BasicPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function BasicPage(props) {
  const [pageContent, setPageContent] = useState([{
    id: 0,
    slug: "",
    title: "",
    body: "",
    status: "",
  }]);

  let { slug } = useParams();

  useEffect(() => {
    function isRequestedPage(pages) {
      return pages.slug === slug;
    }

    async function getPageContent() {
      try {
        const response = await axios.get(`/api/basic-pages/`);
        const allPages = await response.data;
        const requestedPage = allPages.find(isRequestedPage);
        setPageContent(requestedPage);
      } catch (err) {
        console.error(err);
      }
    }
    getPageContent();
  }, [slug]);

  return (
    <div>
      <Header />
      <div className="basic">
        <h1>{pageContent.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageContent.body }} />
      </div>
      <Footer />
    </div>
  );
}

export default BasicPage;

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import React, { useState } from "react";

function Question({
  question,
  response1,
  rubrics1,
  response2,
  rubrics2,
  Response1,
  Response2,
}) {
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  return (
    <div className="container m-3 p-3">
      <h3>{question}</h3>
      <p>
        <button onClick={toggleAnswers} className="btn border">
          {showAnswers ? "Hide Answers" : "View Answers"}
        </button>
      </p>
      {showAnswers && (
        <div>
          <p>
            <strong>Response 1 {Response1}:</strong> {response1}
          </p>
          <p>
            <strong>Rubrics 1:</strong> {rubrics1}
          </p>
          <p>
            <strong>Response 2{Response2}:</strong> {response2}
          </p>
          <p>
            <strong>Rubrics 2:</strong> {rubrics2}
          </p>
        </div>
      )}
      <hr />
    </div>
  );
}

function ScreeningAnswers() {
  const answers = [
    {
      question:
        "Can you write a code in C++ that removes all the whitespaces...",
      Response1: "program that uses a class to remove...",
      rubrics1: "5 5 5 5 1 1",
      Response2: "program that removes whitespace",
      rubrics2: "5 5 5 2 1 1",
    },
    {
      question: "What does the .find() method in Js do?...",
      Response1: "The response Ends with `[4,5]`",
      rubrics1: "5, 4, 2, 4, 1, 1",
      Response2: "The response Ends with `4`",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question: "What does the .find() method in Js do?...",
      Response1: "The response Ends with `[4,5]`",
      rubrics1: "5, 4, 2, 4, 1, 1",
      Response2: "The response Ends with `4`",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "How can I filter a list of coordinates using Python list comprehension...",
      Response1: "To filter",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "Python is a powerful language",
      rubrics2: "2, 4, 5, 2 , 1, 1",
    },
    {
      question: "How do I use the `requests`...",
      Response1: " you can use the Session object provided ",
      rubrics1: "3, 4, 4, 4, 1, 1",
      Response2: " you can use the Retry object provided ",
      rubrics2: "2, 4, 1, 3, 1, 1",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(answers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const visibleAnswers = answers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Navbar />
      {visibleAnswers.map((answer, index) => (
        <Question key={index} {...answer} />
      ))}
      <div className="container m-3 p-3">
        <p>
          Page {currentPage} of {totalPages}
        </p>
        {currentPage > 1 && (
          <button className="btn border" onClick={handlePrevPage}>
            Previous Page
          </button>
        )}
        {currentPage < totalPages && (
          <button className="btn border" onClick={handleNextPage}>
            Next Page
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ScreeningAnswers;

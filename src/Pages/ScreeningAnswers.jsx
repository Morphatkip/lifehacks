import { Link } from "react-router-dom";
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
        "Create a Bash script that allows the reading of the content of a .txt file and print each line",
      Response1: (
        <p>
          Sure! First, I will create a Bash script named printlines.sh which
          will read the file filename.txt and print each line along with its
          line number. It's a simple script that iterates through the file,
          printing the line number and the content of each line. Here's a
          breakdown of the script:
          <br />
          <code>
            {`#!/bin/bash
myfile='cars.txt'
i=1

# Loop that reads each line in the file and prints it with its line number
while read lines; do
  echo "$i : $lines"
  i=$((i+1))
done < $myfile
`}
            <br />
          </code>
          This script will display the content of the `filename.txt` file with
          line numbers prefixed to each line. I hope it helps!
        </p>
      ),

      rubrics1: "3 2 3 4 1 1",
      Response2: (
        <div>
          <p>
            Sure! First, I will create a Bash script named{" "}
            <code>printlines.sh</code> which will read the file{" "}
            <code>filename.txt</code> and print each line along with its line
            number. This code iterates through the file, printing the line
            number and the content of each line.
          </p>

          <p>Here's a breakdown of the Bash script:</p>

          <pre>
            <code>
              {`#!/bin/bash
# Specifies the file to be read
myfile='filename.txt'
# Initializes a counter for line numbers
i=1 

# Loop that reads each line in the file and prints it with its line number
while read -r lines; do
    # Prints the line number and the line content
    echo "$i : $lines"
    # Updates the line number counter
    i=$((i+1))
# Redirects the contents of the file to the 'read' command
done < $myfile`}
            </code>
          </pre>

          <p>To run this script, follow these steps:</p>

          <ul>
            <li>
              Save the content as <code>printlines.sh</code>.
            </li>
            <li>Make the script executable by running:</li>
          </ul>

          <pre>
            <code>chmod +x printlines.sh</code>
          </pre>

          <ul>
            <li>Execute the script:</li>
          </ul>

          <pre>
            <code>./printlines.sh</code>
          </pre>

          <p>
            This script will display the content of the{" "}
            <code>filename.txt</code> file with line numbers prefixed to each
            line.
          </p>

          <p>Feel free to ask any further questions.</p>
        </div>
      ),
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
      <div className="container">
        <div className="m-3">
          <strong>
            Note: <br />
            <p>
              The rubrics is rated out of five with an exception of trust and
              safety and Security which has a rating of 0 and 1. The rubric
              rating is only indicated in the response but there full meaning is
              as below.
              <br />
              Explanation Quality ,Style and Formatting, Functionality and
              Performance, Relevance and Completeness ,Trust and Safety Security
              respoectively Also some question and response are shortened refer
              to full question on{" "}
              <a href="https://remotasks.com/en" target="_blank">
                Remotask
              </a>
              website
            </p>
          </strong>
        </div>

        <h1>Sample Coder screening questions</h1>

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
      </div>

      <Footer />
    </div>
  );
}

export default ScreeningAnswers;

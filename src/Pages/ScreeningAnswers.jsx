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
    {
      question:
        "How can I filter a list of coordinates using Python list comprehension...",
      Response1: "To filter",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: " Python is a powerful language      ",
      rubrics2: "2, 4, 5, 2 , 1, 1",
    },
    ,
    {
      question: "Explain the following code to me React      ...",
      Response1: "``",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "Response 2  doesn't have``      ",
      rubrics2: "5, 2, 5, 5, 1, 1",
    },
    {
      question: "Write a JS/react component for showing a button      ...",
      Response1: " Sure here is an example...",
      rubrics1: "2, 3, 4, 4, 1, 1",
      Response2: "only code      ",
      rubrics2: "5, 3, 5, 5, 1, 1",
    },
    {
      question: "I’m trying to initialize  a list of points in python ...",
      Response1: "Your existing code...    ",
      rubrics1: "2, 4, 5, 2, 1, 1",
      Response2: "  Python’s dictionary behaves a little...     ",
      rubrics2: "4, 4, 5, 5, 1, 1 ",
    },
    {
      question: "Given two arrays `username` and `website`      ...",
      Response1: "Here’s the JavaScript...      ",
      rubrics1: "5, 4, 5, 5, 1, 1",
      Response2:
        " Certainly! Here’s the javaScript code for the given...      ",
      rubrics2: "5, 2, 2, 3, 1, 1      ",
    },
    {
      question:
        "Please answer the following question. Question title: indexing an element from a volatile struct doesn't work in C++ <br> I have this code: ...",
      Response1: "The issue you’re encountering...",
      rubrics1: "2, 5, 2, 2, 1, 1",
      Response2: "The error you’re encountering ... (Correct response)",
      rubrics2: "4, 5, 4, 5, 1, 1",
    },
    {
      question: "How can i include `en_core_web_lg`...",
      Response1: "Sure, to include the en_core_web_lg...      ",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "All right, to include...",
      rubrics2: "5, 3, 5, 5, 1, 1,",
    },
    {
      question: "Implement the following search function in Javascript...",
      Response1: " Sure, here’s the JavaScript code to provide...",
      rubrics1: "2, 4, 3, 5, 1, 1      ",
      Response2: "Here’s the JavaScript code...",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "Come up with the code that has 50 boxes and each box leads to a different random website      ...",
      Response1: "code only      ",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: " ",
      rubrics2: "3, 4, 3, 3, 1, 1, ",
    },
    {
      question: "Given a positive integer `millis`...",
      Response1: "Here’s the asynchronous function ...      ",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: " Below is the asynchronous...      ",
      rubrics2: "3, 3, 5, 3, 1, 1      ",
    },
    {
      question:
        "Write a c code to write a number of digits in an integer without using a function      ...",
      Response1: "C code to write the number of      ",
      rubrics1: "5, 2, 2, 3, 1 , 1      ",
      Response2: "    ",
      rubrics2: "5, 4 , 4, 5, 1, 1",
    },
    {
      question:
        "Write a program in Java to compute the sum of two numbers that sum up to a given number K      ...",
      Response1: "Following is a Java Program...      ",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "Below is a java program...",
      rubrics2: "5, 5, 3, 5, 1, 1",
    },
    {
      question: "refactor this c code snippet, don't use bool, and keep cls...",
      Response1: "Below is the refactored version...",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "Here is the refactored C code snippet...",
      rubrics2: "2, 5, 4, 2, 1, 1",
    },
    {
      question:
        "Given a positive integer N, find all the prime numbers up to N in python...",
      Response1: "This can be solved with the",
      rubrics1: "5, 5, 5, 5, 1, 1",
      Response2: "Definitely, we can do this...",
      rubrics2: "2, 3, 3, 4, 1, 1",
    },
    {
      question:
        "Write a JavaScript script for drawing a pair of responsive eyes on the given canvas, enabling the eyes to track the mouse/cursor movements.\n...",
      Response1: "Certainly! Below is one solution...",
      rubrics1: "3, 4, 5, 4, 1, 1",
      Response2: "Here is a Javascript script for drawing...",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "Define a C++ class called car with private attributes for the make, model, and year,...",
      Response1: " setMake(string m)",
      rubrics1: "5, 4, 5, 5, 1, 1",
      Response2: "setCarDetails",
      rubrics2: "5, 2, 2, 4, 1, 1",
    },
    {
      question:
        "Implement a type of List whose Iterator ignores its null elements. Use the following interface...",
      Response1: "Code starts: import java.util*To filter",
      rubrics1: "3, 4, 3, 3, 1, 1",
      Response2: "Code starts: public class IgnoreNullLinkedList",
      rubrics2: "5, 4, 5, 5, 1, 1",
    },
    {
      question:
        " Write a program in java that concatenates a given string. Give me the code without...",
      Response1:
        " Sure, here's a simple Java program that concatenates a given string:      ",
      rubrics1: "3, 2, 4, 4, 1, 1",
      Response2: "All right, here’s a simple Java      ",
      rubrics2: "5, 5, 5, 5, 1, 1      ",
    },
    ,
    {
      question: "Try to optimize the following code:(Fizz Buzz)        ...",
      Response1: "Got it. Here’s an optimized",
      rubrics1: "5, 5, 5, 5,1,1",
      Response2: "The provided code efficiently generates",
      rubrics2: "4, 4, 2, 2, 1,1 ",
    },
    {
      question:
        'how to improve "(a) =&gt; { return  Math.pow(a) &gt; 2 ?  Math.pow(a) + 1 : false;} " , keeping  in one-line function        ...',
      Response1: "You can improve the given arrow function",
      rubrics1: "5, 2, 3, 3, 1, 1",
      Response2: "To improve the given arrow function",
      rubrics2: "5, 5, 4, 5, 1, 1",
    },
    {
      question:
        "Create a Bash script that allows the reading of the content of a .txt file and print each line....",
      Response1: "Short",
      rubrics1: "3, 2, 3, 4, 1, 1 ",
      Response2: "Lengthy",
      rubrics2: "5, 5, 5, 5, 1, 1      ",
    },
    {
      question: "Why don't I need a try/catch here:...",
      Response1: "This code is employing...",
      rubrics1: "4, 3, 5, 5,1 ,1",
      Response2: "   The requirement of a try/catch      ",
      rubrics2: "2, 3, 4, 2, 1, 1",
    },
    {
      question:
        "Write a function that takes an unordered vector of integers and its dimensions as input...",
      Response1: " End eliminating duplicates.",
      rubrics1: "3, 4, 2, 3, 1, 1",
      Response2: " without duplicates.",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "Explain this code. Go step by step, explaining each line in detail:...",
      Response1: "short",
      rubrics1: "2, 5, 5, 2, 1, 1",
      Response2: "Lengthy",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question: "What is the output in Python? Explain.(print a, print b)...",
      Response1: "The output will be the same in both scenarios",
      rubrics1: "2, 5, 1, 3, 1,1",
      Response2: "The output of the print statements will be as follows:",
      rubrics2: "3, 5, 5, 5, 1,1",
    },
    {
      question:
        "Write me a simple program explaining how classes work in C++...",
      Response1: "Code starts: import java.util*To filter",
      rubrics1: "2, 3, 4, 4, 1, 1",
      Response2: "Class in C++ is the building block that leads ",
      rubrics2: "5, 3, 5, 5, 1, 1, ",
    },
    {
      question: "Explain to me why I get this error message:...",
      Response1: " I can help you with this.",
      rubrics1: "3, 4, 2, 2, 1, 1",
      Response2: " Sure! The error you're encountering is an      ",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "Implement a type of List whose Iterator ignores its null elements. Use the following interface...",
      Response1: "Code starts: import java.util*To filter",
      rubrics1: "3, 4, 3, 3, 1, 1",
      Response2: "Code starts: public class IgnoreNullLinkedList",
      rubrics2: "5, 4, 5, 5, 1, 1",
    },
    {
      question:
        "I need a program in C++ that converts a binary number into a hexadecimal number. Allow an input entry for the binary number. Add comments to all the code....",
      Response1: "Sure. Here is the code",
      rubrics1: "1, 2, 5, 1, 1, 1",
      Response2: "Sure.. Below is a C++ program that converts",
      rubrics2: "5, 5, 5, 5, 1, 1",
    },
    {
      question:
        "What is the syntax for using the replace() method in JavaScript to replace '/ ' to '$$' ? ...",
      Response1: "vThe ‘replace’ method in Javascript",
      rubrics1: "5, 2, 2, 3, 1, 1",
      Response2: "In Javascript the replace method",
      rubrics2: "5, 4, 5, 5, 1, 1",
    },
    {
      question:
        "I'm building a web app that displays weather info for different locations and allows users to compare conditions side-by-side. I'm using JavaScript, and I want some help with the code. First of all, the weather data API I'm using can sometimes be unpredictable in its response time. Can you show me some JavaScript libraries that handle asynchronous data requests, maybe with caching and/or retry?...",
      Response1: "For managing and handling",
      rubrics1: "3, 3, 3, 3, 1, 1",
      Response2: "For handling asynchronous",
      rubrics2: "5, 4, 5, 5, 1, 1",
    },
    {
      question:
        "Generate a program in java that uses flux to filter some data from a text file. There is one number on each line of the text file. It should filter out all numbers that are perfect squares or are powers of 2.        ...",
      Response1: "",
      rubrics1: "5, 5, 5, 5,1, 1",
      Response2: "",
      rubrics2: "4, 3, 3, 2, 1, 1",
    },
    {
      question:
        '#include lt;iostream&gt;#include &lt;string&gt #include &lt;unordered_map&gt  #include "picosha2.h"  Can you help me understand the hashing method in use here?    ...',
      Response1: "Here’s a breakdown of the code",
      rubrics1: "2, 3, 3, 4, 1, 1,",
      Response2: "I’ll break down the hashing method",
      rubrics2: "5, 5, 5,5,1, 1",
    },
    {
      question:
        "import numpy as np def normalize_data(data): data = (data - mean(data)) / std(data   return data What is wrong with this code?    ...",
      Response1:
        "The code you provided contains a few issues that need to be addressed      ",
      rubrics1: "5, 5, 5, 5,1, 1",
      Response2: "The code you provided seems to have inefficient data access",
      rubrics2: "2, 5, 2, 2, 1,1 ",
    },
    {
      question:
        "How would this code run?  #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; #include &lt;time.h&gt;...",
      Response1: "The provided C code includes",
      rubrics1: "2, 4, 1, 2 , 1, 1",
      Response2: "This C program is designed to shuffle",
      rubrics2: "5, 5, 5, 5, 1, 1,",
    },
    {
      question:
        "Given a list of emails, write some code that creates a tuple of the username and domain before .com or anything similar in Python.        ...",
      Response1: "Here’s a Python code",
      rubrics1: "5, 2, 3, 2, 1, 1",
      Response2: "Suppose we have a list of emails",
      rubrics2: "5, 5, 4, 5, 1, 1",
    },
    {
      question:
        "Let's say a div in HTML has the format of:first name: input, last name: input, message: textbox button...",
      Response1: "The solution fulfills your ",
      rubrics1: "3, 2, 3, 4, 1, 1",
      Response2: "The code demonstrates how to ",
      rubrics2: "5,5,5, 5, 1, 1,",
    },
    {
      question:
        "Generate a program in C++ that uses divide and conquer to do polynomial multiplication...",
      Response1: "",
      rubrics1: "5, 2, 2,3, 1, 1",
      Response2: "",
      rubrics2: "5, 5, 5, 5,1, 1,",
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

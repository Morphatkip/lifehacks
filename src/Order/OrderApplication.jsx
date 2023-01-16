import React from "react";

function OrderApplication() {
  const programmingLanguage = [
    { value: "java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "C", label: "C" },
    { value: "Matlab", label: "Matlab" },
    { value: "web", label: "WEB" },
  ];
  return (
    <div>
      <div>
        <form>
          <select>
            {programmingLanguage.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))}
          </select>
          <input type="text"></input>
          <textarea type="text"></textarea>
        </form>
      </div>
    </div>
  );
}

export default OrderApplication;

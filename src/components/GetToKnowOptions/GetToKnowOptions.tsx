import React from "react";

import "./GetToKnowOptions.css";

const GetToKnowOptions = (props: any) => {
  const options = [
    { text: "Years of experience", handler: () => {}, id: 1 },
    { text: "Known technologies", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Contact", handler: () => {}, id: 4 },
    { text: "Hobbies", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default GetToKnowOptions;

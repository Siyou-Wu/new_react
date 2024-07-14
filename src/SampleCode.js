import React, { useState } from "react";

const data = [
  {
    isFolder: true,
    name: "public",
    children: [
      {
        isFolder: false,
        name: "index.html",
      },
    ],
  },
  {
    isFolder: true,
    name: "src",
    children: [
      {
        isFolder: true,
        name: "components",
        children: [
          {
            isFolder: true,
            name: "home",
            children: [
              {
                isFolder: false,
                name: "Home.js",
              },
            ],
          },
        ],
      },
      {
        isFolder: false,
        name: "App.js",
      },
    ],
  },
];

const RecursiveComponent = ({ data }) => {
  const [showNested, setShowNested] = useState({});

  const toggleNested = (name) => {
    setShowNested((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      {data.map((parent) => (
        <div key={parent.name}>
          {parent.isFolder ? (
            <button onClick={() => toggleNested(parent.name)}>{parent.name}</button>
          ) : (
            <span>{parent.name}</span>
          )}
          <div style={{ display: showNested[parent.name] ? "block" : "none" }}>
            {parent.children && <RecursiveComponent data={parent.children} />}
          </div>
        </div>
      ))}
    </div>
  );
};

const SampleCode = () => {
  return (
    <div>
      <h1>File Structure</h1>
      <RecursiveComponent data={data} />
    </div>
  );
};

export default SampleCode;

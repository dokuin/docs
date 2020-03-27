import React from "react";
import CodeBlock from "../../CodeBlock";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

const Installation = () => {
  return (
    <div className="my-5">
      <div className="ml-3 p-3 ">
        <h3 className="mb-3">Installation</h3>
        <h5>
          Dokuin.js is made to be easily installed in your project and is
          designed to be simple to installed
        </h5>
        <br />

        <ol>
          <li>
            <p>
              Make sure you have the latest version of node and npm. you can
              check it with :
            </p>
            <CodeBlock code={JSON.stringify("npm -v && node -v")} />
          </li>
          <li>
            <p>Create your project and install npm locally in it :</p>
            <CodeBlock code={JSON.stringify("npm init")} />
          </li>
          <li>
            <p>Install dokuinjs with script :</p>
            <CodeBlock code={JSON.stringify("npm install -g dokuinjs")} />
          </li>
        </ol>
      </div>
      <div
        className="d-flex justify-content-end"
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#2C4054",
            borderRadius: "10px"
          }}
          className="px-5 p-2"
          to="/docs/usage"
        >
          Usage
          <ArrowForward className="ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default Installation;

import React from "react";
import CodeBlock from "../../CodeBlock";


const Installation = () => {
  return (
    <div className="ml-3 p-3 ">
      <h3>Installation</h3>
      <h6>
        dokuinjs is made to be easily installed in your project and is designed
        to be simple to installed
      </h6>
      <br />
      <br />
     <ol>
        <li>
          <h5>
            make sure you have the latest version of node and npm. you can check
            it with :
          </h5>
          <CodeBlock code={JSON.stringify("npm -v && node -v")} />
        </li>
        <li>
          <h5>
            create your project and install npm locally in it :
          </h5>
          <CodeBlock code={JSON.stringify("npm init")} />
        </li>
        <li>
          <h5>
            install  dokuinjs with script :
          </h5>
          <CodeBlock code={JSON.stringify("npm i dokuinjs")} />
        </li>
      </ol>
    </div>
  );
};

export default Installation;

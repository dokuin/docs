import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CodeBlock from "../../CodeBlock";

const Usage = () => {
  return (
    <div className="ml-3 p-3 ">
      <h3>Usage</h3>
      <br />
      <br />
      <ol>
        <li>
          <h5>first thing you should do is run dokuinjs script :</h5>
          <CodeBlock code={JSON.stringify("dokuin init")} />
        </li>
        <li>
          <h5>now enter about your projects :</h5>
          <CodeBlock
            code={JSON.stringify(`
  Project's Name : <example>
  Project’s Description : <example Api Documentation>
  Base URL : <http://example.api.com/todos/>
  Author’s name : <author name>
  ✔ your configuration have been created`)}
          />
        </li>
        <li>
          <h5
            style={{
              display: "inline "
            }}
          >
            make sure your project is already done. with this command you can
            write your endpoints as many as you want and dokuin will put them in
            one file. Run dokuinjs script :
          </h5>
          <CodeBlock code={JSON.stringify("dokuin create")} />
          <p>it will must be showing like this</p>
          <CodeBlock code={JSON.stringify(`
          Fill these to create endpoints

          HTPP Method: <GET/PUT/PATCH/POST/DELETE>
          Path: <your url path ex:'/allproducts>
          Add Headers ? (yes or no)
          Add Query Params ? (yes or no)
          Add Request Body ? (yes or no)
          Add More enpoints ? (yes or no)
          ✔ your endpoints have been created`)} />
         
        </li>
        <li>
          <h5
            style={{
              display: "inline "
            }}
          >
            type this command, dokuinjs will run all your endpoint and after
            that it will make one file about your endpoints result
          </h5>
          <CodeBlock code={JSON.stringify("dokuin run")} />
          <p>it will must be showing like this</p>
          <CodeBlock code={JSON.stringify(`✔ Got response with code 200: OK from <url>`)}/>
        </li>
        <li>
          <h5
            style={{
              display: "inline "
            }}
          >
            after your endpoints result file is already done, it is time for you
            to convert it to md file
          </h5>
          <CodeBlock code={JSON.stringify(`
  dokuin convert 
  ✔ Successfully converted into MD!`
          )} />
        </li>
        <li>
          <h5
            style={{
              display: "inline "
            }}
          >
            finnaly check your project folder , there is .md files you just created
          </h5>
        </li>
      </ol>
    </div>
  );
};

export default Usage;

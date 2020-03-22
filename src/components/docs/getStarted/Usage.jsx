import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import CodeBlock from "../../CodeBlock";

const Usage = () => {
  return (
    <div className="ml-3 p-3 ">
      <h3>Usage</h3>
      <h6>after installing ..</h6>
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
  Project’s Description : 
  Base URL : 
  Author’s name :`)}
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
          <CodeBlock code={JSON.stringify("dokuin convert")} />
        </li>
      </ol>
    </div>
  );
};

export default Usage;

import React from 'react'
import CodeBlock from '../../CodeBlock'

const Installation = () => {
  return (
    <div className="my-5 ml-3 p-3 ">
      <h3 className="mb-3">Installation</h3>
      <h5>
        Dokuin.js is made to be easily installed in your project and is designed
        to be simple to installed
      </h5>
      <br />

      <ol>
        <li>
          <p>
            Make sure you have the latest version of node and npm. you can check
            it with :
          </p>
          <CodeBlock code={JSON.stringify('npm -v && node -v')} />
        </li>
        <li>
          <p>Create your project and install npm locally in it :</p>
          <CodeBlock code={JSON.stringify('npm init')} />
        </li>
        <li>
          <p>Install dokuinjs with script :</p>
          <CodeBlock code={JSON.stringify('npm i dokuinjs')} />
        </li>
      </ol>
    </div>
  )
}

export default Installation

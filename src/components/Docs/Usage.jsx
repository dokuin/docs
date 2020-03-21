import React from 'react'

import CodeBlock from '../CodeBlock'

const Usage = () => {
  return (
    <div
      className="ml-3 p-3 "
      style={{ fontSize: 'smaller' }}
    >
      <h4>Usage</h4>
      <h6>Example on how to use Dokuin.js</h6>
      <br />
      <br />

      <h5>Initialize</h5>
      <br />
      <ol>
        <li>
          <p>Initialize Dokuin.js on your working directory.</p>
          <CodeBlock code={'dokuinjs init'} />
          <br />
          <br />
        </li>

        <li>
          <p>
            After that, we can create new project to save in your directory.
          </p>
          <p>Simply just run the command:</p>
          <CodeBlock code={'dokuin <project name>'} />
          <br />
        </li>

        <li>
          <p>Then, Generate the documentation file</p>
          <CodeBlock code={'dokuinjs generate'} />
          <br />
        </li>

        <li>
          <p>Enjoy your new documentation</p>
        </li>
      </ol>
    </div>
  )
}

export default Usage

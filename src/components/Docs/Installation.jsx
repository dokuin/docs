import React from 'react'

import CodeBlock from '../CodeBlock'

const GetStarted = () => {
  return (
    <div className="ml-3 p-3 " style={{ fontSize: 'smaller' }}>
      <h5>Installation</h5>
      <br />
      <p>Install Dokuin.js with command:</p>
      <CodeBlock code={'npm install dokuinjs'} />
      <br />
    </div>
  )
}

export default GetStarted

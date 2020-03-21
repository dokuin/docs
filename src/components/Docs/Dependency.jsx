import React from 'react'

import CodeBlock from '../CodeBlock'

const Dependency = () => {
  return (
    <div>
      <h5>Dependency</h5>
      <br />

      <h6>Node.js</h6>
      <p>
        First thing first, Dokuin.js need Node.js and NPM to be run with, we
        need to make sure it was already installed in our computer.
      </p>
      <CodeBlock code={'node -v'} />
      <br />
      <p>Or</p>
      <CodeBlock code={'npm -v'} />
      <br />
      <p>If you not have Node.js installed, then run:</p>
      <CodeBlock code={'sudo apt install nodejs'} />
      <br />
    </div>
  )
}

export default Dependency

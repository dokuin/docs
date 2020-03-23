import React from 'react'

import CodeBlock from '../../CodeBlock'
import DokuinInit from '../../../assets/init.png'
import DokuinCreate from '../../../assets/create.png'
import createsuccess from '../../../assets/createsuccess.png'
import convert from '../../../assets/successconvert.png'

const Usage = () => {
  return (
    <div className="my-5 ml-3 p-3 ">
      <h3 className="mb-3">Example</h3>
      <ol>
        <li>
          <CodeBlock code={JSON.stringify('npm init')} />
          <img src={DokuinInit} height="100%" width="100%" alt="code_example" />
        </li>
        <li>
          <CodeBlock code={JSON.stringify('dokuin Create')} />
          <p>Create without headers / params / body</p>
          <img
            src={DokuinCreate}
            height="100%"
            width="100%"
            alt="code_example"
          />
          <p>Example with headers</p>
        </li>
        <li>
          <CodeBlock code={JSON.stringify('dokuin run')} />
          <img
            src={createsuccess}
            height="100%"
            width="100%"
            alt="code_example"
          />
        </li>
        <li>
          <CodeBlock code={JSON.stringify('dokuin convert')} />
          <img src={convert} height="100%" width="100%" alt="code_example" />
        </li>
      </ol>
    </div>
  )
}

export default Usage

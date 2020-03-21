import React from 'react'

import CodeBlock from '../CodeBlock'

const GetStarted = () => {
  return (
    <div
      className="ml-3 p-3 "
      style={{ fontSize: 'smaller' }}
    >
      <h4>Getting Started</h4>
      <h6>Learn how to setup Dokuin.JS to your project</h6>
      <br />
      <br />

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

      <section>
      <h5>Installation</h5>
      <br />
      <p>Install Dokuin.js with command:</p>
      <CodeBlock code={'npm install dokuinjs'} />
      <br />

      <p>As simple as that, now we are ready to use Dokuin.js.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veniam architecto obcaecati, delectus amet impedit ea dolorem totam provident nihil earum, inventore, unde beatae laboriosam voluptates labore id adipisci porro!</p>

      </section>

    </div>
  )
}

export default GetStarted

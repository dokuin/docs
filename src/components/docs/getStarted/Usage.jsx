import React from 'react'

import CodeBlock from '../../CodeBlock'
import { Link } from 'react-router-dom'
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import ScrollableAnchor from 'react-scrollable-anchor'


const Usage = () => {
  return (
    <div>
    <div className="my-5 ml-3 p-3 ">
      <h3 className="mb-4">Usage</h3>
      <h5 className="mb-5">Learn step by step how to use Dokuin.js.</h5>
      <ol>
        <li>
          <p>First, initialize Dokuin.js script :</p>
          <CodeBlock code={JSON.stringify('   dokuin init')} />
        </li>
        <li>
          <p>Enter your project detail :</p>
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
          <p
            style={{
              display: 'inline '
            }}
          >
            Make sure the initialize process is done. And then you can insert an
            endpoint.
          </p>
          <div className="card p-2 bg-warning my-2">
            <p className="my-auto">
              <b>Note</b> : You can insert more than one endpoint.
            </p>
          </div>
          <CodeBlock code={JSON.stringify('   dokuin create')} />
          <p>It will be showing up like this :</p>
          <CodeBlock
            code={JSON.stringify(`
    Fill these to create endpoints

    HTPP Method: <GET/PUT/PATCH/POST/DELETE>
    Path: <your url path ex:'/allproducts>
    Add Headers ? (yes or no)
    Add Query Params ? (yes or no)
    Add Request Body ? (yes or no)
    Add More enpoints ? (yes or no)
    ✔ your endpoints have been created`)}
          />
        </li>
        <li>
          <p
            style={{
              display: 'inline '
            }}
          >
            Run Dokuin.js, the script will run all your endpoint and make it a
            single file.
          </p>
          <CodeBlock code={JSON.stringify('   dokuin run')} />
          <p>It will be showing up like this :</p>
          <CodeBlock
            code={JSON.stringify(
              `    ✔ Got response with code 200: OK from <url>`
            )}
          />
        </li>
        <li>
          <p
            style={{
              display: 'inline '
            }}
          >
            After your endpoints result file is done, we can convert it to a
            markdown (".md") file.
          </p>
          <CodeBlock
            code={JSON.stringify(`
  dokuin convert 
  ✔ Successfully converted into MD!`)}
          />
        </li>
        <li>
          <p
            style={{
              display: 'inline '
            }}
            >
            Finally, check your local files for the converted ".md" file.
          </p>
        </li>
      </ol>
    <div className="d-flex justify-content-between">
       <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor:'#2C4054',
                  borderRadius:'10px',
                }}
                className="px-5 p-2"
                to="/docs/getting-started"
              >
                <ArrowBack className="ml-3"/>
                installation
              </Link>
        <Link
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor:'#2C4054',
                  borderRadius:'10px',
                }}
                className="px-5 p-2"
                to="/docs/example"
              >
                Example
                <ArrowForward className="ml-3"/>
              </Link>
    </div>
    </div>
    </div>

  )
}

export default Usage

import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const List = styled.li`
   {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;
const Title = styled.h5`
   {
     margin-bottom: 20px;
    font-weight: 800;
  }
`;

const Example = () => {
  return (
    <div className="my-5 ml-3 p-3 ">
      <h3 className="mb-3">Example</h3>
      <ol style={{
        fontWeight:'800',
      }}>
        <List>
          <Title>install dokuin.js</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ npm install -g dokuinjs`}
          </SyntaxHighlighter>
        </List>

        <List>
          <Title>make config file</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin init`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Project Name : netflux
Project Description : it is practice project restful api
Project Base URL : http://localhost:3000
Author : meggy`}
          </SyntaxHighlighter>
        </List>

        <List>
          <Title>Create endpoint list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :
[ ]  Create new configuration
[x]  Create new endpoint list
[ ]  Run endpoint list
[ ]  Generate Markdown
[ ]  Show endpoint list
[ ]  Add new endpoint into endpoint list
[ ]  Update an endpoint on the list 
[ ]  Delete endpoint in existing endpoint list`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`HTTP Method : get
Path: /products
Endpoint description : get all products

Add Headers ? (yes / no) yes
Key: token
Value: dok23uin42js52ist52di32e78be67ste
Add more headers ? (yes / no) no

Add Query Params ? (yes / no) yes
Key: id
Value: w8974e89is0oo
Add more query params ? (yes / no) no 

Add Request Body ? (yes / no) no
Add more endpoints ? (yes / no) no`}
          </SyntaxHighlighter>
          <Title>or</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`HTTP method: put
Path: /movies
Endpoint description: update one movie

Add Headers ? (yes / no): yes
Key: token
Value: dok23uin42js52ist52di32e78be67ste
Add more Headers ? (yes / no) no

Add Query Params ? (yes / no) yes
Key: movieId
Value: w8974e89is0oo
Add more query params ? (yes / no) no

Add Request Body ? (yes / no) yes
Key: title
Value: dark
Key: genre
Value: adventure
Add more Body ? (yes / no) yes
Key: popularity
Value: 34.912
Add more Request Body ? (yes / no) no

Add more endpoints ? (yes / no) : no`}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Show endpoint list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
[x]  Show endpoint list
..
..`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`----------------------------------------------------------------------------
|(index)| id  |  Method  |          Path               |    Description    |
|   1   |  1  |   GET    | http://localhost:3000       | Get all movies    |
|   2   |  2  |   POST   | http://localhost:3000/login | login             |
----------------------------------------------------------------------------
      `}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Delete One Of endpoints</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
..
..
[x]  Delete endpoint in existing endpoints list
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`----------------------------------------------------------------------------
|(index)| id  |  Method  |          Path               |    Description    |
|   1   |  1  |   GET    | http://localhost:3000       | Get all movies    |
|   2   |  2  |   POST   | http://localhost:3000/login | login             |
----------------------------------------------------------------------------
      `}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Endpoint ID : 1 `}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Add new endpoints to the list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
..
[x]  Add new endpoints into endpoints list
..
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`HTTP Method : post
Path: movies/

Add Headers ? (yes / no) no
Add QueryParams ? (yes / no) no
Add Request Body ? (yes / no) yes

Key: email
Value: test@dokuinjs.com
Add more Request Body ? (yes / no) yes
Key: password
Value: 12opw9d9s
Add more Request Body ? (yes / no) no

Add more endpoints ? (yes / no) no`}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Update an endpoint on the list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
..
[x]  Update new endpoints into endpoints list
..
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`----------------------------------------------------------------------
|(index)|  id |  Method  |          Path         |    Description    |
|   1   |  1  |   GET    | http://localhost:3000 | Get all movies    |
----------------------------------------------------------------------
[ ] HTTP Method
[ ] Path
[ ] Description
[X] Query Params
[ ] Request Body
`}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Update an endpoint on the list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
..
[x]  Update new endpoints into endpoints list
..
`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`----------------------------------------------------------------------
|(index)|  id |  Method  |          Path         |    Description    |
|   1   |  1  |   GET    | http://localhost:3000 | Get all movies    |
----------------------------------------------------------------------
[ ] HTTP Method
[ ] Path
[ ] Description
[X] Query Params
[ ] Request Body
`}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Run endpoint list</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
[x]  Run endpoints
..
..
`}
          </SyntaxHighlighter>
        </List>
        <List>
          <Title>Convert responses</Title>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`$ dokuin start`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`Please choose 1 command :

..
..
[x]  Generate Markdown
..
..
`}
          </SyntaxHighlighter>
        
        </List>
      </ol>
    </div>
  );
};

export default Example;

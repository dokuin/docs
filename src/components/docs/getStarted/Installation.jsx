import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Tooltip from '@material-ui/core/Tooltip';
import CodeBlock from '../../CodeBlock'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Installation= () => {
  const[textVal,settextVal]=useState('')
  const[copied,setCopied]=useState(false)

  const handleCopied = () =>{
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },1000)
  }

  return (
    <div
      className="ml-3 p-3 "
      // style={{ fontSize: 'smaller' }}
    >
      <h3>Installation</h3>
      <h6>dokuinjs is made to be easily installed in your project and is designed to be simple to installed</h6>
      <br />
      <br />
      <ol>
        <li>
          <h5>make sure you have the latest version of node and npm. you can check it with :</h5> 
          <div style={{
            backgroundColor:'#CCE5FF',
            borderLeft:'4px solid blue',
            width:'40%',
            padding:"15px",
            display:"flex",
            justifyContent:'space-between'
          }}>
          <pre>
            npm -v and node -v
            </pre>
            <CopyToClipboard 
            text="npm -v && node -vss"
            onCopy={()=> handleCopied()}
            >
            {
              copied ? <Tooltip title="copied" arrow>
                <FileCopyIcon fontSize="small" />
                </Tooltip> 
                :
                <FileCopyIcon fontSize="small" />
              }
        </CopyToClipboard>
          </div>
          </li>
          <li>
          <h5>make sure you have the latest version of node and npm. you can check it with :</h5> 
          <div style={{
            backgroundColor:'#CCE5FF',
            borderLeft:'4px solid blue',
            width:'40%',
            padding:"15px",
            display:"flex",
            justifyContent:'space-between'
          }}>
          <pre>
            npm -v
            </pre>
            <CopyToClipboard 
            text="npm -v "
            onCopy={()=> handleCopied()}
            >
            {
              copied ? <Tooltip title="copied" arrow>
                <FileCopyIcon fontSize="small" />
                </Tooltip> 
                :
                <FileCopyIcon fontSize="small" />
              }
        </CopyToClipboard>
          </div>
          </li>
          
      </ol>

    </div>
  )
}

export default Installation

import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';



const CodeBlock = ({code}) => {
  const [copied,setCopied]= useState(false)
  const parsedCode=JSON.parse(code)
  const handleCopied = () =>{
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    },1000);
    
  }

  // useEffect(() => {
  //   console.log(copied)
  // }, [copied])

  return (
    <div
    className="p-2 d-flex justify-content-between my-4"
    style={{
      backgroundColor:'#cce5ff',
      borderLeft:'3px solid blue'
    }}>
      <pre style={{
        padding:'5px'
      }}>
            {parsedCode}
            </pre>
            <CopyToClipboard 
            text={parsedCode}
            onCopy={handleCopied}
            >
            {
              copied ?
              <Tooltip title="copied" placement="left">
               <FileCopyIcon fontSize="small" />
              </Tooltip>
              :
              <FileCopyIcon fontSize="small" />
              }
        </CopyToClipboard>
    </div>
  )
}

export default CodeBlock


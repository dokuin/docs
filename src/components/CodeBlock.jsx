import React from 'react'
import { Card } from 'react-bootstrap'

const CodeBlock = (props) => {
  return (
    <Card className="p-2">
      <p className="my-auto" style={{ fontStyle: 'italic', userSelect: 'all' }}>
        {props.code}
      </p>
    </Card>
  )
}

export default CodeBlock

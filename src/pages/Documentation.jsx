import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2vh',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const Documentation = () => {
  const classes = useStyles()
  // const [open, setOpen] = useState(true)

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <Container  fluid>
      <Row className="mt-5">
        <Col
          className="position-fixed"
          id="sticky-sidebar"
          style={{
            height: '100%',
            borderRight: '1px solid #cccccc'
          }}
          sm={2}
        >
          {/* list of sidebar */}
        </Col>
        <Col>
          <Row>
            <Col sm={2}>{/* empty content for sidebar space */}</Col>
            <Col sm={10}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Documentation

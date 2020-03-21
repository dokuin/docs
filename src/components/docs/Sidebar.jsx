import React from 'react'
import { Nav, Accordion, Card, AccordionToggle } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
<<<<<<< HEAD:src/components/docs/Sidebar.jsx
    <div className={classes.root}>
      <ExpansionPanel className={classes.bgList}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Geting Started</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul style={{ listStyle: 'none', paddingBottom: '0' }}>
              <li>
<<<<<<< HEAD:src/components/docs/Sidebar.jsx
                <Link style={{
                  textDecoration:'none',
                  color:'black'
              }} to="/docs/getting-started">Installation</Link>
=======
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black'
                  }}
                  to="/docs/get-started"
                >
                  Depedency
                </Link>
>>>>>>> pull development:src/components/Docs/Sidebar.jsx
              </li>
              <Link style={{
                  textDecoration:'none',
                  color:'black'
              }} to="/docs/next-step">Next Step</Link>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.bgList}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Usage</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <Link to="/docs/usage">Initialize</Link>
              </li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
=======
    <Nav defaultActiveKey="/docs/get-started" className="flex-column w-100">
      <Accordion defaultActiveKey="0">
        <Card className="accordion-item">
          <Card.Header className="border-0 nav-link">
            <AccordionToggle as="div" eventKey="0" className="accordion-toggle">
              Get Started
            </AccordionToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <NavLink to="/docs/get-started" className="nav-link">
                Installation
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-item">
          <Card.Header className="border-0 nav-link">
            <AccordionToggle as="div" eventKey="1" className="accordion-toggle">
              Usage
            </AccordionToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <NavLink to="/docs/usage" className="nav-link">
                Usage
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-item">
          <Card.Header className="border-0 nav-link">
            <AccordionToggle as="div" eventKey="2" className="accordion-toggle">
              Commands
            </AccordionToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <NavLink to="/" className="nav-link">
                Commands
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Nav>
>>>>>>> pull dev:src/components/Docs/Sidebar.jsx
  )
}

export default Sidebar

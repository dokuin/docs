import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2vh'
  },
  bgList: {
    backgroundColor: '#e6e6e6',
    boxShadow: 'none',
    '&:hover': {
      background: '#efefef'
    }
  },
  details: {
    paddingBottom: '0'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

const A = styled.a`
{
 text-decoration:none;
 color: black;
 &:hover {
  text-decoration:none;
}
}
`;

const Sidebar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.bgList}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Link
             style={{
               textDecoration: 'none',
               color: 'black'
             }}
             to="/docs/getting-started"
           >
          <Typography className={classes.heading}>Geting Started</Typography>
              </Link>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <ul style={{ listStyle: 'none', paddingBottom: '0' }}>
            <li className="mb-4">
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to="/docs/getting-started"
              >
                Installation
              </Link>
            </li>
            <li className="mb-4">
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
                to="/docs/usage"
              >
                Usage
              </Link>
            </li>
          </ul>
          <Typography></Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.bgList}>
        <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to="/docs/example"
            >
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography className={classes.heading}>Example</Typography>
        </ExpansionPanelSummary>
              </Link>
        <ExpansionPanelDetails className={classes.details}>
          <ul style={{ listStyle: 'none', paddingBottom: '0' }}>
            <li className="mb-4">
             <A href="#install">Install</A>
            </li>
            <li className="mb-4">
            <A href="#config">Make Config</A>
            </li>
            <li className="mb-4">
            <A href="#endpoint">Create Endpoint</A>
            </li>
            <li className="mb-4">
            <A href="#showendpoint">Show Endpoint</A>
            </li>
            <li className="mb-4">
            <A href="#delete">Delete Endpoint</A>
            </li>
            <li className="mb-4">
            <A href="#tolist">New Endpoint to list</A>
            </li>
            <li className="mb-4">
            <A href="#update">Update</A>
            </li>
            <li className="mb-4">
            <A href="#run">Run </A>
            </li>
            <li className="mb-4">
            <A href="#convert">Convert</A>
            </li>
          </ul>
          <Typography></Typography>
        </ExpansionPanelDetails>
        {/* <Link
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
          to="/docs/example"
        >
          <div className="d-flex align-items-center justify-content-start pl-4 py-2">
            <Typography className={classes.heading}>Example</Typography>
          </div>
        </Link> */}
      </ExpansionPanel>
    </div>
  )
}

export default Sidebar

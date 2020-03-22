import React from 'react'
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
    marginTop: '2vh'
  },
  bgList: {
    backgroundColor: '#e6e6e6',
    boxShadow: 'none',
    "&:hover": {
      background: "#efefef"
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
          <Typography className={classes.heading}>Geting Started</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          
             <ul style={{ listStyle: "none", paddingBottom: "0" }}>
              <li style={{
                marginBottom:'10px'
              }}>
              <Link style={{
                textDecoration:'none',
                color:'black',
              }} to="/docs/getting-started">Installation</Link>
              </li>
              <li style={{
                marginBottom:'10px'
              }}>
              <Link style={{
                textDecoration:'none',
                color:'black'
              }} to="/docs/usage">Usage</Link>
              </li>
            </ul> 
            <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.bgList}>
        <Link 
        style={{
          textDecoration:'none',
          color:'black'
        }}
        to='/docs/example'>
          <div className="d-flex align-items-center justify-content-start pl-4 py-2">
          <Typography className={classes.heading}>Example</Typography>
          </div>
          </Link>
      </ExpansionPanel>
    </div>
  )
}

export default Sidebar

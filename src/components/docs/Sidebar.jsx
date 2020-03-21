import React from 'react'
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
    boxShadow: 'none'
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
  )
}

export default Sidebar

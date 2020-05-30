// import useState next to FunctionComponent
import React, { FunctionComponent } from 'react';
// import { Link } from "react-router-dom";
import { Grid, Typography, Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { stories } from '../../types'
// our components props accept a number for the initial value

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    stories: {
      height: '30vh',
      display: 'flex',
      flexDirection: 'column'
    },
    storiesitem: {
      // margin: '20px',
      // border: '1px solid #333'
    },
    storiestitle: {
      fontWeight: 'bold',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '24vh'
    },


  }),
);

const Article: FunctionComponent<stories> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  // const [clicks, setClicks] = useState(() => article);
  // useEffect(() => {
  //     console.log(clicks);
  // })
  const classes = useStyles()

  // const storie = () => Array(3).fill({
  //   name: ''
  // }).map((e: stories, i: number) => (
  //   <Grid key={i} item xs={4}>
  //     <Typography variant='h5' align='left'>Rolls Royce{e}</Typography>
  //     <Typography variant='body1' align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus</Typography>
  //   </Grid>
  // ));


  return <>
    <Typography variant='h2' align='center'>Stories</Typography>
    <br />
    <br />
    <Grid
      container
      spacing={3}

    >
      {/* TODO */}
      <Grid item xs={4} className={classes.storiesitem}>
        <Paper className={classes.paper}>
          <Typography variant='h5' align='left'>Rolls Royce</Typography>
          <Typography variant='body1' align='left'>accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4} className={classes.storiesitem}>
        <Paper className={classes.paper}>
          <Typography variant='h5' align='left'>Lady May</Typography>
          <Typography variant='body1' align='left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus</Typography>
        </Paper>

      </Grid>
      <Grid item xs={4} className={classes.storiesitem}>
        <Paper className={classes.paper}>
          <Typography variant='h5' align='left'>Last Dance</Typography>
          <Typography variant='body1' align='left'>luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </>
}
export default Article;

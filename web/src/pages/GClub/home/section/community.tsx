// import useState next to FunctionComponent
import React, { FunctionComponent } from 'react';
// import { Link } from "react-router-dom";
import { Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { banner } from '../../types'
// our components props accept a number for the initial value

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    link: {
      margin: theme.spacing(1)
    },
    banner: {
      height: '30vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }),
);
const Article: FunctionComponent<banner> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  // const [clicks, setClicks] = useState(() => article);
  // useEffect(() => {
  //     console.log(clicks);
  // })
  const classes = useStyles()

  return <>
    <Grid
      container
      className={classes.banner}
    >
      <Typography variant='h2' align='center'>G Community</Typography>
      {/* <Link to='/' className={classes.link}>go to home</Link> */}
    </Grid>
  </>
}
export default Article;

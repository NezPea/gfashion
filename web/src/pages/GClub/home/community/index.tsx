// import useState next to FunctionComponent
import React, { FunctionComponent } from 'react'
// import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { community } from '../../types'
import List from './List'
// our components props accept a number for the initial value

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
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
  })
)
const Community: FunctionComponent<community> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  // const [clicks, setClicks] = useState(() => article);
  // useEffect(() => {
  //     console.log(clicks);
  // })
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <List></List>
      </div>
    </>
  )
}
export default Community

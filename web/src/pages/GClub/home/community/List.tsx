// import useState next to FunctionComponent
import React, { FunctionComponent } from 'react'
// import { Link } from "react-router-dom";
// import { Grid } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// our components props accept a number for the initial value
import CommunityListItem from './listItem'

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
    },
    community: {
      height: '100%',
      overflow: 'scroll'
    }
  })
)

const list = Array(23)
  .fill({})
  .map(() => ({
    state: Math.random() > 0.5,
    title: 'GTV',
    time: '1 sec ago',
    from: 'GTV LIVE',
    contant: 'Breaking News:LiJun Sun had  just been arrested.'
  }))
const List: FunctionComponent<any> = () => {
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
        {list.map((e, index) => (
          <CommunityListItem key={index} message={e}></CommunityListItem>
        ))}
      </div>
    </>
  )
}
export default List

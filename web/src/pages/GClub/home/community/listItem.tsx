import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './listitem.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& div': {
        marginBottom: theme.spacing(1)
      }
    },
    stateSuccess: {
      backgroundColor: '#00B438',

    },
    stateError: {
      backgroundColor: '#FF0000'
    }

  }),
);

const CommunityListItem = ({ message }: { message: any }) => {
  const classes = useStyles();
  return (
    message && (
      <div className={`${classes.root} listitem-con`}>
        <div className="listitem-title" >
          <div>
            <span className={`tips ${message.state ? 'state-success ' : 'state-error'}`}>&nbsp;</span>
          </div>
          <div className={`title-contant`}>
            <span className="title">{message.title}</span>
            <span>{message.time}</span>
          </div>


        </div>


      </div>
    )

  )
}

export default CommunityListItem;

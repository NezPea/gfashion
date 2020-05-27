import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '250px',
      '& div': {
        marginBottom: '30px',
      }
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '250px',
      width: '250px',
    },
    image: {
      maxHeight: '250px',
      maxWidth: '250px',
      margin: 'auto'
    },
    title: {
      fontSize: '18px',
      margin: '0',
      textAlign: 'center'
    },
    country: {
      color: theme.palette.text.secondary,
      fontSize: '15px',
      textAlign: 'center'
    }
  }),
);

const designer = {
  name: "Callie Buchanan",
  country: "France",
  file: "http://via.placeholder.com/250x250"
};

const DesignerCard = () => {
  const classes = useStyles();

  return (
    designer &&
    (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img
            src={designer.file}
            alt={designer.name}
            className={classes.image}>
          </img>
        </div>
        <h2 className={classes.title}>{designer.name}</h2>
        <div className={classes.country}>{designer.country}</div>
      </div>
    )
  )
}

export default DesignerCard;

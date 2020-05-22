import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MainFrameFullWidth from '../../../components/MainFrame';
import ProductGrid from '../../../components/Product/productGrid';
import Filter from '../../../components/Filter/filter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(7)
    },
    banner: {
      backgroundColor: theme.palette.warning.light,
      width: 'calc(100vw - (100vw - 100%))',
      height: '300px',
      position: 'absolute',
      left: 0,
      marginTop: '-22px'
    },
    header: {
      marginTop: '300px'
    },
    productHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    content: {
      marginTop: '30px'
    },
    dropdownControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    dropdown: {
      borderRadius: 0
    },
    dropdownInput: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    description: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      padding: '20px 40px',
    },
    row: {
      marginTop: theme.spacing(5)
    },
  }),
);

const handleSort = (event: React.ChangeEvent<{ value: unknown }>) => {
  console.log(event.target.value as string);
};

const GFashionProductListing = () => {
  const classes = useStyles();

  return (
    <MainFrameFullWidth>
      <div className={classes.root}>
        <div className={classes.banner}></div>
        <Grid container spacing={3} className={classes.header}>
          <Grid item xs={3}>
            <h2>家具</h2>
          </Grid>
          <Grid item xs={9} className={classes.productHeader}>
            128 Products found
            <FormControl variant="outlined" className={classes.dropdownControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="popularity"
                onChange={handleSort}
                className={classes.dropdown}
                classes={{
                  root: classes.dropdownInput
                }}
              >
                <MenuItem value="popularity">按销量</MenuItem>
                <MenuItem value="price">按价格</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.content}>
          <Grid item xs={3}>
            <Filter />
          </Grid>
          <Grid item xs={9}>
            <ProductGrid />
          </Grid>
        </Grid>
      </div>
    </MainFrameFullWidth>
  )
}

export default GFashionProductListing

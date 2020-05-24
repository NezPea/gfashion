import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { selectProductList, fetchProductList } from '../../../app/slices/productListSlice';
import { Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MainFrameFullWidth from '../../../components/MainFrame';
import ProductGrid from '../../../components/Product/productGrid';
import Filter from '../../../components/Filter/filter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import banner from '../../../assets/images/banner.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(7)
    },
    banner: {
      backgroundImage: `url(${banner})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: 'calc(100vw - (100vw - 100%))',
      height: '400px',
      position: 'absolute',
      left: 0,
      top: '65px'
    },
    header: {
      marginTop: '420px'
    },
    categoryTitle: {
      color: theme.palette.secondary.main,
      fontSize: '28px',
      margin: 0
    },
    productHeader: {
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    content: {
      marginTop: '30px'
    },
    dropdownControl: {
      background: 'transparent',
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

const GFashionProductListing = ({ match }: { match: any }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryId = match && match.params && match.params.categoryId;
  let productList = useSelector(selectProductList);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductList({
        // url: '/product-list' // local mock data
        url: `/gfashion/v1/channelProducts/%3FsearchCriteria[filter_groups][0][filters][0][field]%3Dcategory_id%26searchCriteria[filter_groups][0][filters][0][value]%3D23%26searchCriteria[filter_groups][0][filters][0][condition_type]%3Deq%26searchCriteria[filter_groups][3][filters][0][field]%3Dcolor%26searchCriteria[filter_groups][3][filters][0][value]%3D5485%26searchCriteria[filter_groups][3][filters][0][condition_type]%3Deq%26searchCriteria[pageSize]%3D20%26searchCriteria[currentPage]%3D0%26searchCriteria[sortOrders][0][field]%3Dprice%26searchCriteria[sortOrders][0][direction]%3Ddesc`
      }));
    }
  }, [dispatch, categoryId]);

  return (
    <MainFrameFullWidth>
      <div className={classes.root}>
        <div className={classes.banner}></div>
        <Grid container spacing={3} className={classes.header}>
          <Grid item xs={3}>
            <h2 className={classes.categoryTitle}>家具</h2>
          </Grid>
          <Grid item xs={9} className={classes.productHeader}>
            {(productList.detail && productList.detail.items) ? productList.detail.items.length : 0} Products found
            <FormControl variant="outlined" className={classes.dropdownControl}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="popularity"
                IconComponent={ExpandMoreIcon}
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

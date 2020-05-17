import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const product = {
  name: "Amulettes Equestre耳环",
  price: 2141.23,
  currency: '$',
  designer: 'kekey',
  designerUrl: '#',
  color: [
    {
      title: '红色',
      color: 'red'
    }, {
      title: '蓝色',
      color: 'blue'
    }
  ],
  size: [
    {
      size: 36
    }, {
      size: 38
    }
  ],
  purcahseLimit: 10
}

const useStyles = makeStyles(() =>
  createStyles({
    panelItem: {
      marginTop: '20px'
    },
    line: {
      border: 0,
      borderTop: '1px dashed grey'
    },
    options: {
      display: 'flex',
      alignItems: 'center'
    },
    option: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '20px'
    },
    optionButton: {
      border: 0,
      cursor: 'pointer',
      height: '30px',
      width: '30px'
    },
    optionText: {
      fontSize: '10px'
    },
    purchaseLimit: {
      marginLeft: '48px'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    button: {
      cursor: 'pointer',
      border: 0,
      borderRadius: '5px',
      fontSize: '16px',
      height: '40px',
      width: '70%'
    },
    primary: {
      backgroundColor: '#555555',
      color: '#F0F0F0'
    }
  }),
);

const ProductPanel = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>{product.name}</h1>
      <div><span style={{ fontSize: '22px', fontWeight: 'bold' }}>{product.currency}{product.price}</span> <span>GClub</span></div>
      <div className={`${classes.panelItem}`}>设计师: <a href={product.designerUrl}>{product.designer}</a></div>
      <hr className={`${classes.panelItem} ${classes.line}`} />
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label>颜色</label>
        {
          product.color.map((item, index) => (
            <div key={index} className={classes.option}>
              <button className={classes.optionButton} style={{ backgroundColor: item.color }}></button>
              <span className={classes.optionText}>{item.title}</span>
            </div>
          ))
        }
      </div>
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label>尺码</label>
        {
          product.size.map((item, index) => (
            <div key={index} className={classes.option}>
              <button className={classes.optionButton} >{item.size}</button>
            </div>
          ))
        }
      </div>
      <div className={`${classes.panelItem} ${classes.purchaseLimit}`}>
        每个账号至多购买{product.purcahseLimit}件
      </div>
      <div className={classes.buttonContainer}>
        <button className={`${classes.panelItem} ${classes.button} ${classes.primary}`}>加入购物车</button>
        <button className={`${classes.panelItem} ${classes.button}`}>加入心愿单</button>
      </div>
    </div>
  )
}

export default ProductPanel;

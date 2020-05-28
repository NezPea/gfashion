import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../app/slices/productsSlice";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LoadingFailed from "../Common/loadingFailed";

const productFallback = {
  currency: "$",
  designer: "kekey",
  designerUrl: "#",
  color: [
    {
      title: "红色",
      color: "red"
    },
    {
      title: "蓝色",
      color: "blue"
    }
  ],
  size: [
    {
      size: 36
    },
    {
      size: 38
    }
  ],
  purchaseLimit: 10
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoPanel: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: "475px",
      padding: `0 ${theme.spacing(2)}px`
    },
    panelItem: {
      marginTop: theme.spacing(2)
    },
    line: {
      height: "1px",
      width: "100%",
      background: "#fbf8f4"
    },
    label: {
      color: "#888",
      marginBottom: theme.spacing(3)
    },
    options: {
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start"
    },
    optionWrap: {
      display: "flex",
      alignItems: "center"
    },
    option: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: theme.spacing(2),
      border: "none"
    },
    optionText: {
      fontSize: "10px"
    },
    designerLink: {
      color: theme.palette.secondary.main
    },
    colorCell: {
      width: "40px",
      height: "40px",
      border: "6px solid #fff",
      borderRadius: "100%",
      boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.18)",
      cursor: "pointer"
    },
    size: {
      padding: "14px 44px",
      background: "#fff"
    },
    count: {
      marginRight: theme.spacing(2),
      padding: "14px 44px",
      background: "#fff",
      border: "none",
      textAlign: "center"
    },
    purchaseLimit: {
      marginLeft: "48px"
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    button: {
      cursor: "pointer",
      border: 0,
      borderRadius: "5px",
      fontSize: "16px",
      height: "40px",
      width: "70%"
    },
    primary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper
    },
    secondary: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.main
    }
  })
);

const ProductInfoPanel = () => {
  const classes = useStyles();
  let product = useSelector(selectProduct);

  return product.detail && product.detail?.name ? (
    <div className={classes.infoPanel}>
      <h1>{product.detail?.name}</h1>
      <div>
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>
          {productFallback.currency}
          {product.detail?.price}
        </span>{" "}
        <span>GClub</span>
      </div>
      <div className={`${classes.panelItem}`}>
        <label className={`${classes.label}`}>
          设计师{" "}
          <a
            className={`${classes.designerLink}`}
            href={productFallback.designerUrl}
          >
            {productFallback.designer}
          </a>
        </label>
      </div>
      <hr className={`${classes.panelItem} ${classes.line}`} />
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label className={`${classes.label}`}>颜色</label>
        <div className={`${classes.optionWrap}`}>
          {productFallback.color.map((item, index) => (
            <button
              key={index}
              className={`${classes.option} ${classes.colorCell}`}
              style={{ backgroundColor: item.color }}
              title={item.title}
            ></button>
          ))}
        </div>
      </div>
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label className={`${classes.label}`}>尺码</label>
        <div className={`${classes.optionWrap}`}>
          {productFallback.size.map((item, index) => (
            <button key={index} className={`${classes.option} ${classes.size}`}>
              {item.size}
            </button>
          ))}
        </div>
      </div>
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label className={`${classes.label}`}>数量</label>
        <div className={classes.optionWrap}>
          <input type="number" className={`${classes.count}`} value={1} />件
          <span style={{ color: "#888" }}>
            （每个账号至多购买{productFallback.purchaseLimit}）
          </span>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={`${classes.panelItem} ${classes.button} ${classes.primary}`}
        >
          加入购物车
        </button>
        <button
          className={`${classes.panelItem} ${classes.button} ${classes.secondary}`}
        >
          加入心愿单
        </button>
      </div>
    </div>
  ) : (
    <LoadingFailed />
  );
};

export default ProductInfoPanel;

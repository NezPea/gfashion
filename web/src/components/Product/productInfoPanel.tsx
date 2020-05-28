import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../app/slices/productsSlice";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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
    heading: {
      margin: `0 0 ${theme.spacing(2)}px`,
      fontSize: "30px"
    },
    panelItem: {
      margin: `0 0 ${theme.spacing(5)}px`
    },
    line: {
      margin: `0 0 ${theme.spacing(3)}px`,
      borderTop: "thin solid #fbf8f4",
      width: "100%"
    },
    brand: {
      marginLeft: "10px",
      padding: "4px 7px",
      background: theme.palette.secondary.main,
      borderRadius: "2px",
      fontSize: "12px",
      color: theme.palette.secondary.contrastText,
      textDecoration: "none"
    },
    label: {
      color: "#888",
      fontSize: "18px"
    },
    options: {
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start"
    },
    optionWrap: {
      marginTop: theme.spacing(3),
      display: "flex",
      alignItems: "center"
    },
    option: {
      marginRight: theme.spacing(2),
      cursor: "pointer",
      border: "1px solid transparent",
      "&.active": {
        border: "1px solid #222"
      },
      "&:focus": {
        outline: "none"
      }
    },
    optionText: {
      fontSize: "10px"
    },
    designerLink: {
      marginLeft: "10px",
      color: theme.palette.secondary.main
    },
    colorCell: {
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.18)",
      background: "#fff",
      padding: "6px"
    },
    colorCore: {
      width: "100%",
      height: "100%",
      borderRadius: "100%"
    },
    size: {
      padding: "14px 44px",
      background: "#fff"
    },
    count: {
      marginRight: theme.spacing(2),
      border: "1px solid transparent",
      width: "120px",
      padding: "14px",
      background: "#fff",
      textAlign: "center",
      "&:focus": {
        outline: "none",
        border: "1px solid #222"
      }
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
      fontSize: "16px",
      height: "40px",
      width: "70%"
    },
    primary: {
      marginBottom: theme.spacing(3),
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

  const buildProductOptions = () => {
    return product.detail?.extension_attributes?.configurable_product_options?.map(
      option => {
        // @workaround according option id apart from color option
        return option.id === 171 ? (
          <div className={`${classes.panelItem} ${classes.options}`}>
            <label className={`${classes.label}`}>{option.label}</label>
            <div className={`${classes.optionWrap}`}>
              {option?.values?.map((item, index) => (
                <button
                  key={index}
                  className={`${classes.option} ${classes.colorCell}`}
                  title={item?.value?.name}
                >
                  <div
                    style={{ backgroundColor: item?.value?.name }}
                    className={`${classes.colorCore}`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={`${classes.panelItem} ${classes.options}`}>
            <label className={`${classes.label}`}>{option.label}</label>
            <div className={`${classes.optionWrap}`}>
              {option?.values.map((item, index) => (
                <button
                  key={index}
                  className={`${classes.option} ${classes.size}`}
                >
                  {item?.value?.name}
                </button>
              ))}
            </div>
          </div>
        );
      }
    );
  };

  return product.detail && product.detail?.name ? (
    <div className={classes.infoPanel}>
      <h1 className={classes.heading}>{product.detail?.name}</h1>
      <Box display="flex" alignItems="center">
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          {productFallback.currency}
          {product.detail?.price}
        </span>
        <a href={product.detail?.brand_link} className={classes.brand}>
          {product.detail?.brand_name}
        </a>
      </Box>
      <Box display="flex" alignItems="center" style={{ margin: "28px 0 42px" }}>
        <label className={`${classes.label}`}>设计师</label>
        <a
          className={`${classes.designerLink}`}
          href={productFallback.designerUrl}
        >
          {productFallback.designer}
        </a>
      </Box>
      <hr className={`${classes.line}`} />
      {buildProductOptions()}
      <div className={`${classes.panelItem} ${classes.options}`}>
        <label className={`${classes.label}`}>数量</label>
        <div className={classes.optionWrap}>
          <input type="number" className={`${classes.count}`} value={1} />件
          <span style={{ color: "#888" }}>
            （每个账号至多购买{product.detail?.purchase_number_limit}件）
          </span>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={`${classes.button} ${classes.primary}`}>
          加入购物车
        </button>
        <button className={`${classes.button} ${classes.secondary}`}>
          加入心愿单
        </button>
      </div>
    </div>
  ) : (
    <LoadingFailed />
  );
};

export default ProductInfoPanel;

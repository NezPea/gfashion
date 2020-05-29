import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GridList, GridListTile, Typography } from '@material-ui/core';
import { RecommendedProductProps } from '../../../app/types';
import { useTranslation } from 'react-i18next';
import { I18N, I18N_NS } from '../_i18n';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down("xl")]: {
        padding: theme.spacing(20, 0),
        minHeight: 1046
      },
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(16, 0),
        minHeight: 800
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(12, 0),
        minHeight: 600
      }
    },
    contentContainer: {
      [theme.breakpoints.down("xl")]: {
        width: 1404
      },
      [theme.breakpoints.down("lg")]: {
        width: 1200
      },
      [theme.breakpoints.down("md")]: {
        width: 800
      }
    },
    headline: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    surroundingLine: {
      height: 0,
      width: 50,
      border: '1px solid #000'
    },
    sectionTitle: {
      ...theme.typography.homeSectionTitle,
      margin: theme.spacing(0, 5)
    },
    sectionDescription: {
      ...theme.typography.homeSectionDescription,
      textAlign: 'center'
    },
    products: {
      width: '48%',
      marginLeft: `0 !important`
    },
    productsFeatured: {
      width: '48%',
      marginRight: `0 !important`
    },
    tileContent: {
      backgroundColor: theme.palette.background.default,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    featuredTile: {
      paddingTop: `0 !important`,
      paddingBottom: `0 !important`
    },
    productsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(8, 0),
      '& img': {
        width: '100%'
      }
    }
  }),
);

export const RecommendedProducts: React.FunctionComponent<RecommendedProductProps> = ({ products = [] }) => {
  const classes = useStyles();
  const { t } = useTranslation(I18N_NS);

  const featuredProducts = products.filter(p => p.isFeatured);
  const otherProducts = products.filter(p => !p.isFeatured)

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.headline}>
          <div className={classes.surroundingLine}></div>
          <Typography className={classes.sectionTitle} align='center'>
            {t(I18N.home.recommended_products.title)}
          </Typography>
          <div className={classes.surroundingLine}></div>
        </div>
        <Typography className={classes.sectionDescription}>
          {t(I18N.home.recommended_products.description)}
        </Typography>
        <div className={classes.productsContainer}>
          <GridList spacing={12} cols={2} cellHeight={400} className={classes.productsFeatured}>
            {
              featuredProducts.map((fp, i) => {
                return (
                  <GridListTile key={i} className={classes.featuredTile}>
                    <div className={classes.tileContent}>
                      <img src={require(`../../../assets/images/${fp.name}.jpg`)} alt='product' />
                    </div>
                  </GridListTile>
                )
              })
            }
          </GridList>
          <GridList spacing={12} cols={2} cellHeight={200} className={classes.products}>
            {
              otherProducts.map((op, i) => {
                return (
                  <GridListTile key={i}>
                    <div className={classes.tileContent}>
                      <img src={require(`../../../assets/images/${op.name}.jpg`)} alt='product' />
                    </div>
                  </GridListTile>
                )
              })
            }
          </GridList>
        </div>
      </div>
    </div>
  )
}

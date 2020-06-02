import React from 'react'
import { Link } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { I18N_NS } from '../../pages/GFashion/product/_i18n'
import { ProductDetail } from '../../app/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '30px',
      width: '300px',
      '& div': {
        marginBottom: theme.spacing(1)
      }
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '310px',
      width: '310px'
    },
    link: {
      color: theme.palette.text.primary,
      display: 'block',
      margin: 'auto'
    },
    image: {
      maxHeight: '300px',
      maxWidth: '300px'
    },
    title: {
      fontSize: '18px',
      margin: '20px 0 10px',
      textAlign: 'center'
    },
    price: {
      fontSize: '18px',
      textAlign: 'center'
    }
  })
)

const ProductCard = ({ product }: { product: ProductDetail }) => {
  const classes = useStyles()
  const { i18n } = useTranslation(I18N_NS)

  return (
    product && (
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <Link
            href={`/${i18n.language}/product/${product.sku}`}
            classes={{ root: classes.link }}>
            <img
              src={
                product.file
                  ? 'https://www.gfashion2020.tk/media/catalog/product' +
                    product.file
                  : ''
              }
              alt={product.name}
              className={classes.image}></img>
          </Link>
        </div>
        <Link
          href={`/${i18n.language}/product/${product.sku}`}
          classes={{ root: classes.link }}>
          <h2 className={classes.title}>{product.name}</h2>
        </Link>
        <div className={classes.price}>${product.price}</div>
      </div>
    )
  )
}

export default ProductCard

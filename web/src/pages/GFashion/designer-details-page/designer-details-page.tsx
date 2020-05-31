import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import LeftPrimaryPictureStory from './components/left-primary-picture-story'
import LeftRectanglePrimaryPictureStory from './components/left-rectangle-primary-picture-story'
import OneMediaStory from './components/one-media-story'
import RightPrimaryPictureStory from './components/right-primary-picture-story'
import Top from './components/top'
import Footer from 'src/components/Footer'
import product1 from 'src/assets/images/featured-product-1.png'
import product2 from 'src/assets/images/featured-product-2.png'
import product3 from 'src/assets/images/featured-product-3.png'
import product4 from 'src/assets/images/featured-product-4.png'
import ProductCardTest from './components/product-card-test'

class _DesignerDetailsPageDesktop extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['designer-details-page']}>
                <Top />
                <div className='content-container'>
                    <div className='content-spacing'></div>
                    <div className='content'>
                        <div className='designer-stories'>
                            <div className='designer-story-container'>
                                <LeftPrimaryPictureStory />
                            </div>
                            <div className='designer-story-container'>
                                <LeftRectanglePrimaryPictureStory />
                            </div>
                            <div className='designer-story-container'>
                                <OneMediaStory />
                            </div>
                            <div className='designer-story-container'>
                                <RightPrimaryPictureStory />
                            </div>
                        </div>
                        <div className='featured-products'>
                            <div className='title-container'>
                                <div className='title'>{'Products'}</div>
                            </div>
                            <div className='products'>
                                <div className='product-container'>
                                    <ProductCardTest product={{
                                        name: 'HERMES',
                                        file: product1,
                                        oneLineDescription: 'Denim Double-Breasted Blazer',
                                        price: '2500'
                                    }} />
                                </div>
                                <div className='spacing'></div>
                                <div className='product-container'>
                                    <ProductCardTest product={{
                                        name: 'HERMES',
                                        file: product2,
                                        oneLineDescription: 'Denim Double-Breasted Blazer',
                                        price: '2500'
                                    }} />
                                </div>
                                <div className='spacing'></div>
                                <div className='product-container'>
                                    <ProductCardTest product={{
                                        name: 'BALMAIN',
                                        file: product3,
                                        oneLineDescription: 'Denim Double-Breasted Blazer',
                                        price: '2500'
                                    }} />
                                </div>
                                <div className='spacing'></div>
                                <div className='product-container'>
                                    <ProductCardTest product={{
                                        name: 'BALMAIN',
                                        file: product4,
                                        oneLineDescription: 'Denim Double-Breasted Blazer',
                                        price: '2500'
                                    }} />
                                </div>
                                <div className='spacing'></div>
                            </div>
                        </div>
                    </div>
                    <div className='content-spacing'></div>
                </div>
                <Footer />
            </div>
        )
    }
}

const DesignerDetailsPageDesktop = withStyles({
    'designer-details-page': {
        position: 'relative',
        width: '100vm',
        '& .content-container': {
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            backgroundColor: '#fbf7f4',
            '& .content-spacing': {
                position: 'relative',
                flexGrow: 1,
                flexShrink: 0,
                width: '3.750rem',
            },
            '& .content': {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                flexShrink: 1,
                width: '87.500rem',
                '& .designer-stories': {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    '& .designer-story-container': {
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        marginTop: '4.992rem',
                        backgroundColor: '#ffffff'
                    },
                },
            },
        },
        '& .featured-products': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            '& .title-container': {
                position: 'relative',
                height: '8.500rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& .title': {
                    position: 'relative',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    color: '#222222'
                }
            },
            '& .products': {
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: '43.750rem',
                '& .product-container': {
                    width: '19.500rem',
                    height: '35.188rem'
                },
                '& .spacing': {
                    width: '3.125rem',
                    height: '35.188rem'
                },
                '& .spacing:last-child': {
                    width: '0',
                    height: '0'
                }
            }
        }
    }
})(_DesignerDetailsPageDesktop)

export default DesignerDetailsPageDesktop

//minimum screen width 820px
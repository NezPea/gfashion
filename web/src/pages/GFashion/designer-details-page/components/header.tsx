import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import menuIcon from '../../../../assets/images/menu-white.png';
import gtvIcon from '../../../../assets/images/gtv-white.png';
import gnewsIcon from '../../../../assets/images/gnews-white.png';
import cartIcon from '../../../../assets/images/cart-white.png';
import accountIcon from '../../../../assets/images/account-white.png';
import zhIcon from '../../../../assets/images/zh-cn.png';
import dropOffIcon from '../../../../assets/images/drop-off-white.png';

class _Header extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['header-container']}>
                <img className='menu-icon' src={menuIcon} alt='menu' />
                <div className='gfashion-text-logo'>
                    {'gfashion'}
                </div>
                <div className='spacing'></div>
                <img className='gtv-logo' src={gtvIcon} alt='gtv'></img>
                <img className='gnews-logo' src={gnewsIcon} alt='gnews'></img>
                <div className='functions-area'>
                    <img className='cart' src={cartIcon} alt='cart'></img>
                    <img className='account-icon' src={accountIcon} alt='account'></img>
                    <div className='locale-menu'>
                        <img className='locale' src={zhIcon} alt='locale'></img>
                        <img className='drop-off' src={dropOffIcon} alt='drop off'></img>
                    </div>
                </div>
            </div>
        )
    }
}

const Header = withStyles({
    'header-container': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '5.124rem',
        '& .menu-icon': {
            position: 'relative',
            marginLeft: '2.563rem'
        },
        '& .gfashion-text-logo': {
            position: 'relative',
            marginLeft: '2.563rem',
            width: '6.875rem',
            height: '2.000rem',
            fontFamily: "'Lobster 1.4'",
            fontSize: '2.000rem',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1,
            letterSpacing: 'normal',
            color: '#bd9a70'
        },
        '& .spacing': {
            position: 'relative',
            flexGrow: 1,
            flexShrink: 0,
            width: '4.000rem'
        },
        '& .gnews-logo': {
            position: 'relative',
            marginLeft: '4.000rem'
        },
        '& .functions-area': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '7.000rem',
            marginLeft: '4.125rem',
            marginRight: '4.563rem',
            '& .locale-menu': {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                '& .drop-off': {
                    position: 'relative',
                    marginLeft: '0.300rem'
                }
            }
        }
    }
})(_Header)

export default Header
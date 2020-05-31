import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './header'
import designerPhoto from 'src/assets/images/designer4.png'
import topBackground from 'src/assets/images/top-background.png'
import hermes from 'src/assets/images/hermes.svg'
import balmain from 'src/assets/images/balmain.svg'
import chanel from 'src/assets/images/chanel.svg'
import chaumet from 'src/assets/images/chaumet.svg'
import brioni from 'src/assets/images/brioni.svg'

class _Top extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['top-container']}>
                <div className='background-container'>
                    <img className='background-picture' src={topBackground} alt='one'></img>
                </div>
                <div className='header'>
                    <Header />
                </div>
                <div className='designer-profile-container'>
                    <div className='designer-profile-background'>
                        <div className='row-1-background'></div>
                        <div className='row-2-background'></div>
                    </div>
                    <div className='designer-profile-min-spacing'></div>
                    <div className='designer-profile-second-container'>
                        <div className='designer-profile'>
                            <div className='row-1'>
                                <div className='photo-space'></div>
                                <div className='text-profile'>
                                    <div className='designer-name'>Pierre Hardy</div>
                                    <div className='space-between'></div>
                                    <div className='designer-description'>
                                        {'Turn to covetable Balmain womenswear for a vampish approach to feminine glamour. Military-inspired tailoring'}
                                        {' lends instant impact to tuxedo dresses and mini skirts, alongside signature blazer jackets.'}
                                    </div>
                                </div>
                            </div>
                            <div className='row-2'>
                                <div className='photo-space'></div>
                                <div className='brands'>
                                    <div className='brand-container'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' src={hermes} alt='one'></img>
                                            </div>
                                            <div className='brand-name'>{'HERMES'}</div>
                                        </div>
                                    </div>
                                    <div className='brand-container'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' src={balmain} alt='one'></img>
                                            </div>
                                            <div className='brand-name'>{'Balmain'}</div>
                                        </div>
                                    </div>
                                    <div className='brand-container'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' src={chanel} alt='one'></img>
                                            </div>
                                            <div className='brand-name'>{'CHANEL'}</div>
                                        </div>
                                    </div>
                                    <div className='brand-container'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' src={chaumet} alt='one'></img>
                                            </div>
                                            <div className='brand-name'>{'CHAUMET'}</div>
                                        </div>
                                    </div>
                                    <div className='brand-container'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' src={brioni} alt='one'></img>
                                            </div>
                                            <div className='brand-name'>{'Brioni'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='photo-frame'>
                                <img className='photo' src={designerPhoto} alt='one'></img>
                            </div>
                        </div>
                    </div>
                    <div className='designer-profile-min-spacing'></div>
                </div>
            </div>
        )
    }
}

const Top = withStyles({
    'top-container': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '& .background-container': {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            '& .background-picture': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        },
        '& .header': {
            position: 'relative',
            height: '5.124rem',
        },
        '& .designer-profile-container': {
            position: 'relative',
            display: 'flex',
            width: '100vw',
            '& .designer-profile-background': {
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                top: '0',
                bottom: '0',
                width: '100vw',
                '& .row-1-background': {
                    position: 'relative',
                    height: '21.504rem',
                },
                '& .row-2-background': {
                    position: 'relative',
                    flexGrow: 1,
                    flexShrink: 0,
                    height: '12.000rem',
                    backgroundColor: '#7b6e64'
                },
            },
            '& .designer-profile-min-spacing': {
                position: 'relative',
                flexGrow: 1,
                flexShrink: 0,
                width: '1.000rem',
            },
            '& .designer-profile-second-container': {
                position: 'relative',
                display: 'flex',
                flexShrink: 1,
                width: '92.875rem',
                '& .designer-profile': {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    flexGrow: 1,
                    flexShrink: 0,
                    width: '46.438rem',
                    maxWidth: '61.062rem',
                    '& .row-1': {
                        position: 'relative',
                        display: 'flex',
                        height: '21.504rem',
                        '& .photo-space': {
                            position: 'relative',
                            width: '17.250rem',
                        },
                        '& .text-profile': {
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            marginTop: '12.120rem',
                            width: '0',
                            height: '6.936rem',
                            flexGrow: 1,
                            flexShrink: 0,
                            '& .designer-name': {
                                position: 'relative',
                                height: '2.500rem',
                                fontFamily: 'Montserrat',
                                fontSize: '2.496rem',
                                fontWeight: 'bold',
                                fontStretch: 'normal',
                                fontStyle: 'normal',
                                lineHeight: '1',
                                letterSpacing: 'normal',
                                color: '#ffffff',
                            },
                            '& .space-between': {
                                position: 'relative',
                                flexGrow: 1,
                                flexShrink: 0,
                            },
                            '& .designer-description': {
                                position: 'relative',
                                height: '3.125rem',
                                fontFamily: 'Roboto',
                                fontSize: '0.936rem',
                                fontWeight: 500,
                                fontStretch: 'normal',
                                fontStyle: 'normal',
                                lineHeight: '1.47',
                                letterSpacing: 'normal',
                                color: '#ffffff',
                                overflow: 'hidden',
                            },
                        },
                    },
                    '& .row-2': {
                        position: 'relative',
                        display: 'flex',
                        '& .photo-space': {
                            position: 'relative',
                            width: '17.250rem',
                        },
                        '& .brands': {
                            position: 'relative',
                            display: 'flex',
                            width: '0',
                            flexGrow: 1,
                            flexShrink: 0,
                            flexWrap: 'wrap',
                            '& .brand-container': {
                                position: 'relative',
                                marginRight: '3.563rem',
                            },
                            '& .brand-container:last-child': {
                                marginRight: '0'
                            },
                            '& .brand': {
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop: '2.652rem',
                                paddingBottom: '1.875rem',
                                width: '5.256rem',
                                '& .brand-logo-container': {
                                    position: 'relative',
                                    marginBottom: '0.875rem',
                                    width: '5.256rem',
                                    height: '5.256rem',
                                    borderRadius: '100%',
                                    '& .brand-logo': {
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '100%',
                                        objectFit: 'cover'
                                    }
                                },
                                '& .brand-name': {
                                    position: 'relative',
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bold',
                                    fontSize: '0.750rem',
                                    height: '2.304rem',
                                },
                            },
                        },
                    },
                    '& .photo-frame': {
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: '9.624rem',
                        left: '0rem',
                        width: '15.000rem',
                        height: '15.000rem',
                        '& .photo': {
                            position: 'relative',
                            width: '14.600rem',
                            height: '14.600rem',
                            borderStyle: 'solid',
                            borderRadius: '100%',
                            borderWidth: '0.2rem',
                            borderColor: '#ffffff',
                            objectFit: 'cover'
                        }
                    }
                }
            }
        }
    }
})(_Top);

export default Top
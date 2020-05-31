import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './header'

class _Top extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['top-container']}>
                <div className='background-container'>
                    <img className='background-picture' alt='one'></img>
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
                                    {
                                        Array.from(Array(4).keys()).map(_ => (
                                            <div className='brand-container-with-margin-right'>
                                                <div className='brand'>
                                                    <div className='brand-logo-container'>
                                                        <img className='brand-logo' alt='one'></img>
                                                    </div>
                                                    <div className='brand-name'></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className='brand-container-without-margin-right'>
                                        <div className='brand'>
                                            <div className='brand-logo-container'>
                                                <img className='brand-logo' alt='one'></img>
                                            </div>
                                            <div className='brand-name'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='photo-frame'>
                                <img className='photo' alt='one'></img>
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
        },
        '& .header': {
            position: 'relative',
            height: '5.124rem',
        },
        '& .designer-profile-container': {
            position: 'relative',
            display: 'flex',
            width: '100vw',
            backgroundColor: '#c0c0c0',
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
                    backgroundColor: '#909090',
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
                        backgroundColor: '#909090',
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
                            backgroundColor: '#404040',
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
                                backgroundColor: '#707070',
                            },
                            '& .designer-description': {
                                position: 'relative',
                                height: '3.125rem',
                                fontFamily: 'SFUIDisplay',
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
                            backgroundColor: '#707070',
                            '& .brand-container-with-margin-right': {
                                position: 'relative',
                                marginRight: '3.563rem',
                            },
                            '& .brand-container-without-margin-right': {
                                position: 'relative',
                            },
                            '& .brand': {
                                position: 'relative',
                                paddingTop: '2.652rem',
                                paddingBottom: '1.875rem',
                                width: '5.256rem',
                                backgroundColor: '#606060',
                                '& .brand-logo-container': {
                                    position: 'relative',
                                    marginBottom: '0.875rem',
                                    width: '5.256rem',
                                    height: '5.256rem',
                                    backgroundColor: '#404040',
                                    borderRadius: '100%',
                                },
                                '& .brand-name': {
                                    position: 'relative',
                                    width: '5.256rem',
                                    height: '2.304rem',
                                    backgroundColor: '#303030',
                                },
                            },
                        },
                    },
                    '& .photo-frame': {
                        position: 'absolute',
                        top: '9.624rem',
                        left: '0rem',
                        width: '15.000rem',
                        height: '15.000rem',
                        backgroundColor: '#404040',
                        borderRadius: '100%',
                    }
                }
            }
        }
    }
})(_Top);

export default Top
// import useState next to FunctionComponent
import React, { FunctionComponent } from 'react';
import { Container, Typography } from '@material-ui/core'
import MainFrame from '../../../components/MainFrame';
import { article } from '../types'

const Article: FunctionComponent<article> = () => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  // const [clicks, setClicks] = useState(() => article);
  // useEffect(() => {
  //     console.log(clicks);
  // })
  return <>
    <MainFrame >
      <Container>
        <Typography variant='h2' align='center'>Nasdaq turns positive for 2020 as investors bet on economic recovery</Typography>
        <Typography variant='h4' align='center'>Construction is resuming in Michigan, outdoor activities are restarting in Maryland</Typography>
        <div></div>
        <div>
          <span>2020-5-8</span>
          <span>By garber</span>
        </div>
        <Typography variant='body2' align='left'>U.S. equity markets rose on Thursday as investors focused on the early stages of an economic recovery as more states began reopening businesses. Also, record jobless claims showed signs of stabilizing.</Typography>
        <Typography variant='body2' align='left'>The Nasdaq Composite turned positive for the year rising 1.4 percent while the S&P 500 gained 1.1 percent and the Dow Jones Industrial Average added over 211 points or 0.89 percent.</Typography>
        <image></image>
        <Typography variant='body2' align='left'>U.S. equity markets rose on Thursday as investors focused on the early stages of an economic recovery as more states began reopening businesses. Also, record jobless claims showed signs of stabilizing.</Typography>
        <Typography variant='body2' align='left'>The Nasdaq Composite turned positive for the year rising 1.4 percent while the S&P 500 gained 1.1 percent and the Dow Jones Industrial Average added over 211 points or 0.89 percent.</Typography>
        <video></video>
        {/* <button></button> */}
      </Container>
    </MainFrame>
  </>
}
export default Article;

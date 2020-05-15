// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import MainFrame from '../../components/MainFrame';

// our components props accept a number for the initial value
interface article { title?: String, contant?: String }

const Article: FunctionComponent<article> = (article) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  // const [clicks, setClicks] = useState(() => article);
  // useEffect(() => {
  //     console.log(clicks);
  // })
  return <>
    <MainFrame >
      <h1>this is title</h1>
      <div>this is content</div>
    </MainFrame>
  </>
}
export default Article;
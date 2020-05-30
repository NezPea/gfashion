import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GClubFrame from '../../../components/MainFrame/GClubFrame'
import {
  fetchGClubtoken,
  selectGClubToken
} from '../../../app/slices/gclubTokenSlice'

const GClubProfile = () => {
  const dispatch = useDispatch()
  let token = useSelector(selectGClubToken)
  console.log(token)

  useEffect(() => {
    dispatch(
      fetchGClubtoken({
        url: 'http://localhost/api/v1/login',
        method: 'POST',
        data: {
          account: '1111',
          password: '1111'
        }
      })
    )
    // eslint-disable-next-line
  }, [])

  return <GClubFrame></GClubFrame>
}

export default GClubProfile

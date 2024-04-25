import React, { useEffect, useState } from 'react'
import RoomBox from '../components/RoomBox'

const Home = () => {
  // get the user ip address from https://api64.ipify.org?format=json

  const [userIp, setUserIp] = useState('');
  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setUserIp(data.ip);
      })
      .catch(error => console.error('Error fetching user IP:', error));
  }, []);
  return (
    
      // <RoomBox roomName={"userIp"} />
    
    <RoomBox roomName={
      userIp ? userIp.replace(/\./g, '-') : 'loading'
    }/>
  )
}

export default Home

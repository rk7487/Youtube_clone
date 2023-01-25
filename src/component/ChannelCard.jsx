import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import ChannelDetail from './ChannelDetail'
  const ChannelCard = ({channelcard, marginTop}) => {
   console.log("bhai2",channelcard)
  return (
   
    <Box
    sx={{
      boxShadow : 'none',
      borderRadius :'20px',
      display: 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      width : {xs : '356px', md: '320px'},
      height : '326px',
      margin : 'auto',
      marginTop , 
    }}>
      <Link to={`/channel/${channelcard?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection : 'column',
      justifyContent:'center', textAlign:'center', color:'#fff'}}>
        <CardMedia
        image={channelcard?.snippet?.thumbnails?.high?.url ||
        demoProfilePicture } alt={channelcard?.snippet?.title}
        sx={{borderRadius : '50%', height : '180px',
        width:'180px', mb:2 , border : '1px solid #e3e3e3'}}/>
        <Typography variant="h6">
          {channelcard?.snippet?.title}
          <CheckCircle sx={{ fontSize:15, color:'gray', ml:'5px'}}/>
        </Typography>
        {channelcard?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelcard?.statistics?.subscriberCount).toLocaleString()} 
            Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
      
    </Box>
  )
}

export default ChannelCard
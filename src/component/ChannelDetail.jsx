import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideo] = useState([]);
  const {id} = useParams();
  console.log(channelDetail, video);
  
  useEffect(()=>{

    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)=>{console.log("bhai",data)
      setChannelDetail(data?.items[0])})

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideo(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
         background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(209,45,253,1) 74%)',
         zIndex : 10,
         height : '300px'
        }}/> 
        <ChannelCard channelcard={channelDetail} marginTop = '-110px'/>
      </Box>
      <Box display="fex" p="2" >
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos ={video}/>

        

      </Box>
      </Box>
  )
}

export default ChannelDetail
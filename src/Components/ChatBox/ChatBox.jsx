import { Avatar, Box, TextareaAutosize, TextField, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const ChatBox = () => {
  return (
    <Box>
        <Box sx={{borderTopLeftRadius : '10px',borderTopRightRadius : '10px',display : 'flex', alignItems: 'center' ,color : 'white', justifyContent: 'center',bgcolor: '#2f2e44',height : 40,textAlign : 'center'}}>
            <Typography variant='p' >Live Chat</Typography>    
        </Box>
        <Box
            sx={{
                width: 260,
                height: 300,
                bgcolor: 'white',
                padding : '5px'
            }}
        >
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-start',paddingTop : '10px'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography sx={{ml : '11px',backgroundColor: '#1f0a53',padding:2,borderRadius :'20px',color: 'white'}}>Hello</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-end',paddingTop : '10px'}}>
            <Typography sx={{mr : '11px',backgroundColor: '#343a5c',padding:2,borderRadius :'20px',color: 'white'}}>How can I help you?</Typography>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-start',paddingTop : '10px'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography sx={{ml : '11px',backgroundColor: '#1f0a53',padding:2,borderRadius :'20px',color: 'white'}}>I want to order a custom design</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-end',paddingTop : '10px'}}>
            <Typography sx={{mr : '11px',backgroundColor: '#343a5c',padding:2,borderRadius :'20px',color: 'white'}}>Follow <Link to='/custom'>/custom</Link></Typography>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </Box>
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="Text.."
          multiline
          rows={1}
          fullWidth
          sx={{background: 'white'}}
        />
    </Box>
  )
}

export default ChatBox
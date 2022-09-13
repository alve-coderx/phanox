import { Avatar, Box, TextareaAutosize, TextField, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'

const ChatBox = () => {
  return (
    <Box>
        <Box sx={{borderTopLeftRadius : '10px',borderTopRightRadius : '10px',display : 'flex', alignItems: 'center' , justifyContent: 'center',bgcolor: '#10b981',height : 40,textAlign : 'center'}}>
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
            <Typography sx={{ml : '11px'}}>Hello</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-end',paddingTop : '10px'}}>
            <Typography sx={{mr : '11px'}}>Hello</Typography>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-start',paddingTop : '10px'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography sx={{ml : '11px'}}>Hello</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems: "center", justifyContent : 'flex-end',paddingTop : '10px'}}>
            <Typography sx={{mr : '11px'}}>Hello</Typography>
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
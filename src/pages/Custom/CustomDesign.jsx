import { TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
  import Navbar from '../../Components/Navbar/Navbar'
import { PhotoCamera } from '@mui/icons-material';

const CustomDesign = () => {
  const [iscreate,setIsCreate] = useState(false)
  return (
    <div>
      <Navbar/>
 
          
       {
        iscreate 
        ? (
          <Container sx={{padding: '50px',display :'flex', flexDirection : 'column', alignItems : 'center'}}>
            <Box sx={{marginTop : '50px'}}>
              <Typography variant='h2'>1. Sample Design</Typography>
              <h4 className="my-3">Add Images For Product</h4>
              <Button variant="outlined" fullWidth color='success' component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </Button>
            </Box>
            <Box sx={{marginTop : '50px'}}>
              <Typography variant='h2'>2. Add Some Notes</Typography>
              <TextField
                  id="outlined-multiline-static"
                  label="Text.."
                  multiline
                  rows={1}
                  fullWidth
                  sx={{background: 'white'}}
                />
            </Box>
            <Button style={{width: '200px', borderRadius: '0',margin:'10px'}} variant="outlined" color='success'> Add to cart</Button>
            <Button style={{width: '200px', borderRadius: '0',backgroundColor: '#10b981'}} variant="contained" color="error">By now</Button>

          </Container>
        ) 
        
        : (
          <Container sx={{background : '#10b981',marginTop :'10px',textAlign : 'center',padding : '50px'}}>
              <Typography sx={{margin: '10px'}} variant='h2'>Create Custom Design</Typography>
              <Typography sx={{margin: '10px'}} variant='h3'>Personalized your febric</Typography>
              <Box sx={{margin: '10px'}}>
                <Typography variant='h5'> 116,543 Satisfied Clients</Typography>
                <Typography variant='h5'> Worldwide Shipping</Typography>
              </Box>
                <Typography sx={{margin: '10px'}} variant='h5'> Highly Creative Artwork</Typography>
                <Button onClick={() => setIsCreate(true)}>Create Now</Button>
            </Container>

        )
       }
    </div>
  )
}

export default CustomDesign
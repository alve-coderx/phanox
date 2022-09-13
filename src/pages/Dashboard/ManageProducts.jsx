import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import Table from '../../Components/Table/Table';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
const ManageProducts = () => {
  return (
    <Box  sx={{padding : '50px'}}>
        <Box sx={{display:"flex",alignItems : 'center', justifyContent : 'space-between'}}>
          <Box>
            <Typography variant='h3'>ManageProducts</Typography>
            <Typography variant='h5'>Manage your products</Typography>
          </Box>
          <Box>
            <Button variant='contained' color='success'> + Add New Product</Button>
          </Box>
        </Box>
        <Box sx={{marginTop : '10px', backgroundColor : '#fafbfe',paddingY : '20px',paddingX : '10px',boxShadow : '5px 5px 10px 5px',border : '1px solid gray'}}>
          <Box sx={{display:"flex",alignItems : 'center', justifyContent : 'space-between'}}>
            <Box>
              <TextField id="outlined-basic" label="Search" variant="outlined" />
            </Box>
            <Box>
              <IconButton>
                <PictureAsPdfIcon/>
              </IconButton>
              <IconButton>
                <LocalPrintshopIcon/>
              </IconButton>
            </Box>
          </Box>
          <Table/>
        </Box>
    </Box>
  )
}

export default ManageProducts
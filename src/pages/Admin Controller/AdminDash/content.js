import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Button, Checkbox, FormControlLabel, Grid, IconButton, Paper, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { postProduct, delProduct } from '../../../features/admin/adminSlice'
import {v4} from 'uuid'
import CloseIcon from '@mui/icons-material/Close';
import { PhotoCamera } from '@mui/icons-material';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dataSchema = {
    title: '',
    details: '',
    price: 0,
    discount: 0,
    images: [],
    rating: 0,
}

const Content = ({prodata}) => {
  const { ontherData } = useSelector(state => state.product)
  const [isDiscount, setIsDiscount] = useState(false)
  const [data, setData] = useState(dataSchema)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(ontherData)
  }, [ontherData])


    const handleAddProduct = (e) => {
      e.preventDefault();
      
      const formData = new FormData()      
      
      // Add Product Images      
      for(let i = 0; i < data.images.length; i++) {
        formData.append('productImg', data.images[i])
      }

      // Add Product Info
      formData.append('title', data.title)
      formData.append('details', data.details)
      formData.append('price', data.price)
      formData.append('rating', data.rating)
      formData.append('discount', data.discount)
      formData.append('productId', v4())

      // Post Form Data to server
      dispatch(postProduct(formData))
    }

    const handleDelProduct = (id) => {
      console.log(id)
      dispatch(delProduct(id))
    }

  return (
    <div style={{backgroundColor : '#fafbfe'}}>
    <div className='add_product_Container mx-5 p-md-5 mb-2'>
        <ul style={{maxHeight: '400px', overflow: 'auto'}}>
            {prodata?.map(pro => (
                <li key={pro._id} style={{backgroundColor: 'white'}} className="p-2 px-4">
                <Col className="col-1" style={{width: '50px'}}><img className='w-100' src={pro.images[0]} alt={pro.title} /></Col>
                <div className="d-flex flex-column ps-4 mb-2">
                    <Col className="d-flex align-items-center">{pro.title}</Col>
                    <Rating name="read-only" value={pro.rating} readOnly style={{fontSize: '25px'}} />
                    <span>${pro.price}</span>
                </div>
                <div className="del_product" onClick={() => handleDelProduct(pro._id)}><CloseIcon /></div>
              </li>
            ))}

      </ul>
    </div>
    {/* add form to add product */}
    <div className="w-75 mx-5 p-5 " style={{background : 'white'}}>
      <h2 className="">Product add</h2>
      <h4 className="">Create new product</h4>
      <form onSubmit={handleAddProduct}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <TextField
              label="Product Title"
              defaultValue=""
              id="reddit-input"
              variant="outlined"
              style={{ marginTop: 11 }}
              fullWidth
              onChange={(e) => setData({...data, title: e.target.value})}
            />
          </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item>
            <TextField
              label="Product Price"
              defaultValue=""
              id="reddit-input"
              variant="outlined"
              style={{ marginTop: 11 }}
              fullWidth
              onChange={(e) => setData({...data, price: parseFloat(e.target.value)})}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TextField
              label="Product Rating"
              defaultValue=""
              id="reddit-input"
              variant="outlined"
              style={{ marginTop: 11 }}
              fullWidth
              onChange={(e) => setData({...data, rating: parseFloat(e.target.value)})}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <TextField
              label="Product Details"
              defaultValue=""
              id="reddit-input"
              variant="outlined"
              style={{ marginTop: 11 }}
              fullWidth
              onChange={(e) => setData({...data, details: e.target.value})}
            />
          </Item>
        </Grid>
      </Grid>
        {isDiscount && 
        <TextField
        label="Product Discount "
        defaultValue=""
        id="reddit-input"
        variant="outlined"
        style={{ marginTop: 11 }}
        onChange={(e) => setData({...data, discount: parseFloat(e.target.value)})}
        />}<br/>
        <FormControlLabel control={<Checkbox />} label="Has Discount" onChange={e => setIsDiscount(e.target.checked)} />
        <h4 className="my-3">Add Images For Product</h4>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" 
              name="productImg"
              onChange={ (e) => setData({...data, images: [...data.images, e.target.files[0]]}) }  />
              <PhotoCamera /> Upload Image
            </IconButton>

        <Box sx={{display : 'flex',justifyContent : 'space-around'}}>
          <div className="my-3"><Button size='large' type="submit" variant="contained" color='warning'>submit</Button></div>
          <div className="my-3"><Button size='large' variant="contained" color='inherit'>Cancel</Button></div>
        </Box>
      </form>
    </div>
    </div>
  )
}

export default Content


  
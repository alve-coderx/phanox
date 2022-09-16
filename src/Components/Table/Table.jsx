import { Avatar, Box } from '@mui/material';
import Table from 'react-bootstrap/Table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/admin/adminSlice';
function ResponsiveExample() {
  const {data} = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <Box>
        <Table responsive>
          <thead>
            <tr style={{color:'white'}}>
                <th>product image</th>
                <th>#product id</th>
                <th>product title</th>
                <th>product discount</th>
                <th>product price</th>
                <th>product rating</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{color:'white'}}>
            {
                data?.data?.map((product) => (
                    <tr key={product._id}>
                        <td style={{padding : '20px'}}><Avatar alt="Remy Sharp" src={product?.images[0]}/></td>
                        <td style={{padding : '20px'}}>{product._id}</td>
                        <td style={{padding : '20px'}}>{product.title}</td>
                        <td style={{padding : '20px'}}>{product.discount}%</td>
                        <td style={{padding : '20px'}}>{product.price}</td>
                        <td style={{padding : '20px'}}>{product.rating}</td>
                        <td style={{padding : '20px'}}><RemoveRedEyeIcon/><EditIcon/><DeleteOutlineIcon/></td>
                    </tr>
                ))
            }
            
          
          </tbody>
        </Table>
    </Box>
  );
}

export default ResponsiveExample;
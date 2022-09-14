import { Avatar, Box } from '@mui/material';
import Table from 'react-bootstrap/Table';
import {petterns,products} from '../../fake/fake';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function ResponsiveExample() {
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
                <th>product color</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{color:'white'}}>
            {
                petterns.map((product) => (
                    <tr key={product.productId}>
                        <td style={{padding : '20px'}}><Avatar alt="Remy Sharp" src={product?.images[0].src}/></td>
                        <td style={{padding : '20px'}}>{product.productId}</td>
                        <td style={{padding : '20px'}}>{product.title}</td>
                        <td style={{padding : '20px'}}>{product.discount}%</td>
                        <td style={{padding : '20px'}}>{product.price}</td>
                        <td style={{padding : '20px'}}>{product.color}</td>
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
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
            <tr>
                <th>product image</th>
                <th>#product id</th>
                <th>product title</th>
                <th>product discount</th>
                <th>product price</th>
                <th>product color</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                petterns.map((product) => (
                    <tr key={product.productId}>
                        <td><Avatar alt="Remy Sharp" src={product?.images[0].src}/></td>
                        <td>{product.productId}</td>
                        <td>{product.title}</td>
                        <td>{product.discount}%</td>
                        <td>{product.price}</td>
                        <td>{product.color}</td>
                        <td><RemoveRedEyeIcon/><EditIcon/><DeleteOutlineIcon/></td>
                    </tr>
                ))
            }
            
          
          </tbody>
        </Table>
    </Box>
  );
}

export default ResponsiveExample;
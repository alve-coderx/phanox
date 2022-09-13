import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink, Outlet } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Logout } from '@mui/icons-material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      backgroundColor : '#111827',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const user = {
    email: "demo@gmail.com"
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent"  open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
            <List component='nav'>
                { user.email ? 
                <NavLink style={{color :'#10b981',textDecoration : 'none'}} to='/join'>
                    <ListItemButton sx={{ mt:5}}>
                        <ListItemIcon sx={{color :'#10b981',}}>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        {user.email}<br/>
                    </ListItemButton>
                </NavLink> : ""
                }
                <NavLink style={{color :'#10b981',textDecoration : 'none'}} to='/dashboard/addproducts'>
                    <ListItemButton sx={{ mt:5}}>
                        <ListItemIcon sx={{color : '#10b981',}}>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add A Product" />
                    </ListItemButton>
                </NavLink>
                <NavLink style={{color :'#10b981',textDecoration : 'none'}} to='/dashboard/manageproducts'>
                    <ListItemButton sx={{ mt:5}}>
                        <ListItemIcon sx={{color : '#10b981',}}>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Manage Products" />
                    </ListItemButton>
                </NavLink>
                
            </List>
        </Drawer>
        <Box
          component="main"
          sx={{
           
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
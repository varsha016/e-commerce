import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from '../redux/users/reducer/authReducer';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { userLogoutAction } from '../redux/users/actions/authAction';
import { Button } from '@mui/material';
import { adminLogoutAction } from '../redux/admin/action/employeeAction';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function AdminNavbar() {
    const navigate=useNavigate()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // apla code start
    // const { userLogin } = useSelector(getUserAuthData)
    const [userData, setUserData] = React.useState({

    })
    const dispatch = useDispatch()
    const linkArray = [
        { to: "/admin/dashboard", label: "Dashboard" },
        { to: "/admin/add/product", label: "AdminAddProduct" },
        { to: "/admin/products", label: "AdminProducts" },
        { to: "/admin/users", label: "userList" },
       { label: "logout" },
    ]


    // apla code end

    return (
        ///////////////////////////
  
    //   <Divider />
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      

        <Box sx={{ display: 'flex',  }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} >
            <Toolbar>
                
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
               
                <Typography variant="h6" noWrap component="div">
                    {/* {userLogin && userLogin.name} */}
                </Typography>
            </Toolbar>
            
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >

                 <DrawerHeader>
         <IconButton onClick={handleDrawerClose}>
           {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
         </IconButton>
       </DrawerHeader>
            <Divider />
            <List>
                {linkArray.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        {
                            text.label === "logout"
                                ? <Button sx={{ marginTop: "50px" }} onClick={e=>{dispatch(adminLogoutAction())
                                    navigate("/")
                                }} >Logout</Button>
                                : <Link to={text.to}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text.label} />
                                    </ListItemButton>
                                </Link>
                        }

                    </ListItem>
                ))}
            </List>
            <Divider />

        </Drawer>
        <Main open={open} sx={{ marginTop: "75px" }}>
            <DrawerHeader />
           </Main>
    </Box>
    );
}


   
          
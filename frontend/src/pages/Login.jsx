



import react, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { userLoginAction, userLoginWithGoogle } from '../redux/users/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams, useNavigate ,} from 'react-router-dom';
import { Alert } from '@mui/material';
import { getUserAuthData } from '../redux/users/reducer/authReducer';
import {GoogleLogin} from "react-google-login"
import {gapi} from "gapi-script"
import {Link} from "react-router-dom"

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

const theme = createTheme();

export default function Login() {

    const navigate = useNavigate()
    const { userLogin,userLoginError } = useSelector(getUserAuthData)
    const [error, setError] = useState()
    const [params, SetParams] = useSearchParams()
   


    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        dispatch(userLoginAction(
            {
                email: data.get('email'),
                password: data.get('password'),
            },

        ))
    };
    useEffect(() => {
        setError(params.get("redirected") === "401"
            ? "Unauthorized Access. Please Login " : null)
        setError(params.get("r") === "logout"
            ? "Logout Success " : null)
    }, [])
    useEffect(() => {
        if (userLogin) {
            navigate("/user/account")
        }

    }, [userLogin])

    useEffect(() => {
        // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
        // console.log("29807622822-o9ttkg1p7jhkqv8bcb0ik6j5tr1dj7qu.apps.googleusercontent.com");
        gapi.load("client:auth2",()=>{
          gapi.auth2.init({
  clientId:"29807622822-o9ttkg1p7jhkqv8bcb0ik6j5tr1dj7qu.apps.googleusercontent.com",
  scope:""
          })
        })
      }, [])
      const handleFail=(data)=>{console.log(data);}
      const handleSuccess=(data)=>{
        console.log(data)
        dispatch(userLoginWithGoogle({tokenId:data.tokenId}))
        }
    return (
        <ThemeProvider theme={theme}>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>


                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {error && <Alert severity='error' >{error}</Alert>}
                        {userLoginError && <Alert severity='error' >{userLoginError}</Alert>}
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <GoogleLogin
                            //  clientId={`process.env.REACT_APP_GOOGLE_CLIENT_ID`}
                             clientId="29807622822-o9ttkg1p7jhkqv8bcb0ik6j5tr1dj7qu.apps.googleusercontent.com"
                             onFailure={handleFail}
                             onSuccess={handleSuccess}
                             cookiePolicy='single_host_origin'
                            />
                            <Grid container>
                                <Grid item xs>
                                {/* <Link to="/email" className='nav-link'>Email</Link> */}
                                    <Link to="/forgate-password" className='nav-link' variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    );
}
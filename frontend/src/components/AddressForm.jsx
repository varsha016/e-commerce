import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getUserAuthData } from '../redux/users/reducer/authReducer';
import { useSelector } from 'react-redux';

export default function AddressForm() {
    const { userLogin } = useSelector(getUserAuthData)
    const userData = [

        {

            label: "Enter Your Name",
            val: userLogin ? userLogin.name : "",
            disable: true

        },
        {

            label: "Enter Your email",
            val: userLogin ? userLogin.email : "",
            disable: true

        },
        {

            label: "Enter Your Mobile Number",
            val: userLogin ? userLogin.mobile : "",

        },
        {

            label: "Enter You House",
            val: userLogin ? userLogin.house : "no data found"

        },
        {

            label: "Enter City",
            val: userLogin ? userLogin.city : ""

        },
        {

            label: "Enter state",
            val: userLogin ? userLogin.state : ""

        },
        {

            label: "Enter Pincode",
            val: userLogin ? userLogin.pincode : ""

        },
        {

            label: "Enter landmark",
            val: userLogin ? userLogin.landmark : ""

        }
    ]
    return <>
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                {
                    userData.map(item => <>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                disabled={item?.disable}
                                id={item.val}
                                name={item.val}
                                label={item.label}
                                fullWidth
                                value={item.val}
                                autoComplete={item.val}
                                variant="standard"
                            />
                        </Grid>

                    </>)
                }

            </Grid>
        </React.Fragment>



    </>
}


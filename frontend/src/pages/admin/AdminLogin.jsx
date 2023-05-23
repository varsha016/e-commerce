import { ThemeProvider } from '@emotion/react';
import { Avatar, Button, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import *as yup from "yup"
// import { adminLogin, adminRegister } from '../../redux/users/actions/adminAction';
import { createTheme, } from "@mui/material/styles";
import { adminLogin } from '../../redux/admin/action/employeeAction';
const theme = createTheme({
    color: "red",
});

function AdminLogin() {
  const dispatch=  useDispatch()
     const navigate=  useNavigate()
    const formik = useFormik({
        initialValues: {
          email: "admin@gmail.com",
            password: "123",
           },
        validationSchema: yup.object({
          email: yup
                .string()
                .email("Some Thing Is Missing")
                .required("Please Enter Your Email "),

            password: yup
                .string()
                .min(3, "Minimum Three Character Required")
                .max(6, "Max Six Character Required")
                .required("Please Enter Your password "),

        }),
        onSubmit: (values, e) => {
            console.log(values);
           
            dispatch(adminLogin(values))
            navigate("/admin/dashboard")

        },
    });
  return <>
  <ThemeProvider theme={theme}>
            <Container sx={{ bgcolor: "secondary" }} component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        bgcolor: "danger",
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontFamily: "revert-layer",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            {/* <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.name && formik.touched.name
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="name"
                                    label="First Name"
                                    name="name"
                                    autoComplete="email"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.name}
                                </Typography>
                            </Grid> */}

                          

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    color="secondary"
                                    fullWidth
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.email && formik.touched.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="Email"
                                    type="text"
                                    id="email"
                                    autoComplete="email"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.email}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    color="success"
                                    fullWidth
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.password && formik.touched.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.password}
                                </Typography>
                            </Grid>

                            

                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signin" variant="body2">
                                    Already have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
  
  
  </>
}

export default AdminLogin
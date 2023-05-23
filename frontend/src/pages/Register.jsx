import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { userRegisterAction } from "../redux/users/actions/authAction";
// import { purple } from "@mui/material/colors";

const theme = createTheme({
    color: "red",
});

export default function Register() {
   const dispatch=  useDispatch()
     const navigate=  useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "kate",
          email: "kate@gmail.com",
            password: "111",
           

          
        },
        validationSchema: yup.object({
            name: yup.string().required("Please Enter Your First Name"),

            

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
           
            dispatch(userRegisterAction(values))
            navigate("/user/account")

        },
    });

    return (
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
                            <Grid item xs={12}>
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
                            </Grid>

                          

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

                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    color="success"
                                    fullWidth
                                    name="CPassword"
                                    value={formik.values.CPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.CPassword && formik.touched.CPassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    label="Confirm password"
                                    type="password"
                                    id="Cpassword"
                                    autoComplete="new-password"
                                />
                                <Typography
                                    sx={{ color: "red", fontFamily: "revert-layer" }}
                                    className="invalid-feedback"
                                >
                                    {formik.errors.CPassword}
                                </Typography>
                            </Grid> */}

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
    );
}
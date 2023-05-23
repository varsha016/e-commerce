



import { Box, Button, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { useFormik } from 'formik';
import *as yup from "yup"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AdminAddProductAction } from '../../redux/admin/action/employeeAction';

function AdminAddProduct() {
    const [image, setImage] = useState()
    const dispatch=  useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "watch",
            brand: "sony",
            category: "electronics",
            desc: "very Nice",
            price: "200",
            stock: "2",
            

        },
        validationSchema: yup.object({
            name: yup.string().required("Please Enter Your First Name"),

            brand: yup.string().required("Please Enter Your Brand"),

            category: yup
                .string()
                .required("Please Enter Your category "),

            desc: yup
                .string()
                .required("Please Enter Your descriptoin "),

            price: yup
                .string()
                .required("Please Enter Your price"),
            stock: yup
                .string()
                .required("Please Enter Your stock"),
        }),
        onSubmit: (values, e) => {
            const employeeId="63e0cf9890f78c457ae4cf17"
                const fd= new FormData()
                fd.append("name",    values.name)
                fd.append("brand",   values.brand)
                fd.append("category",values.category)
                fd.append("desc",    values.desc)
                fd.append("price",   values.price)
                fd.append("stock",   values.stock)
                
                
                
                for (const item of image) {
                    fd.append("image", item)
                    
                }
                for (const item of fd.entries()) {
                    console.log(item);
                }
                // console.log(fd.entries());
                console.log("hello");
                
            dispatch(AdminAddProductAction(fd))
        },
    });
    return <>

    {JSON.stringify(formik.errors)}
        <Container sx={{ bgcolor: "secondary" }} component="main" maxWidth="xs">
            {/* <CssBaseline /> */}
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
                {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    product
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
                                label=" name"
                                name="name"
                                autoComplete="name"
                            />
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                                {formik.errors.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                           
                            <Input type='file' inputProps={{ multiple: true }} onChange={e=>setImage(e.target.files)} placeholder="ff"></Input>
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                color="secondary"
                                fullWidth
                                name="brand"
                                value={formik.values.brand}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.errors.brand && formik.touched.brand
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                label="Choose Brand"
                                type="text"
                                id="brand"
                                autoComplete="family-name"
                            />
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                                {formik.errors.brand}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
              <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.category && formik.touched.category
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="categorye"
                  label="Category"
                  name="category"
    labelId="demo-simple-select-label"
  >   
    <MenuItem value="cloths">Cloths</MenuItem>
    <MenuItem value="electronics">Electronics</MenuItem>
    <MenuItem value="gadgets">Gadgets</MenuItem>
    <MenuItem value="footware">Footware</MenuItem>
  </Select>
</FormControl>
                <Typography
                  sx={{ color: "red", fontFamily: "revert-layer" }}
                  className="invalid-feedback"
                >
                  {formik.errors.category}
                </Typography>
              </Grid>

                        

                        <Grid item xs={12}>
                            <TextField
                                required
                                color="success"
                                fullWidth
                                name="desc"
                                value={formik.values.desc}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.errors.desc && formik.touched.desc
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                label="desc"
                                type="text"
                                id="desc"
                                autoComplete="new-password"
                            />
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                                {formik.errors.desc}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                color="success"
                                fullWidth
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.errors.price && formik.touched.price
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                label=" Price"
                                type="text"
                                id="price"
                                autoComplete="price"
                            />
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                                {formik.errors.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                color="success"
                                fullWidth
                                name="stock"
                                value={formik.values.stock}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.errors.stock && formik.touched.stock
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                label="STOCK"
                                type="text"
                                id="stock"
                                autoComplete="new-password"
                            />
                            <Typography
                                sx={{ color: "red", fontFamily: "revert-layer" }}
                                className="invalid-feedback"
                            >
                                {formik.errors.stock}
                            </Typography>
                        </Grid>


                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Product
                    </Button>
                    {/* <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/signin" variant="body2">
                                Already have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid> */}
                </Box>
            </Box>
        </Container>



    </>
}

export default AdminAddProduct
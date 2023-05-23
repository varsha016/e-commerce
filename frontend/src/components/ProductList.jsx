import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, CircularProgress, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { URL } from '../redux/api';
import { getCartData } from '../redux/users/reducer/cartReducer';
import { cartHistoryAction } from '../redux/users/actions/cartAction';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const dispatch = useDispatch()
    const [sum, setSum] = useState()
    const { cart, loading, getCartError } = useSelector(getCartData)
    useEffect(() => {

        dispatch(cartHistoryAction())

    }, [])
    let totalPrice = 0
    useEffect(() => {
        cart.map(item => {
            totalPrice += item.products.reduce((t, i) => t + i.price * i.qty, 0)

        })
        setSum(totalPrice)

    }, [cart])

    if (loading) {
        return <CircularProgress></CircularProgress>
    }
    if (getCartError) {
        return <Alert severity="error">Unable To Fetch cart Data</Alert>
    }
    if (cart && cart.length === 0) {
        return <Box>
            <Typography>No Cart Item</Typography>
            <Button>Start Shopping Now</Button>
        </Box>
    }




    return <>
        {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
        <Grid container sx={{ padding: "0px 4rem" }} >

            <Grid md={6}>
                {
                    cart && cart.map(item => <>
                        <Stack direction="row" gap={2}>
                            {item.products && item.products.map(product => <>
                                {/* <h1>{product.productId.image[0]}</h1> */}
                                {product.productId.image && <>
                                    <img variant='square' alt="Remy Sharp" src={`${URL}/${product?.productId?.image[0]}`} className='img-fluid' />
                                    <Box>

                                        <Typography variant='h6'> {product.price}</Typography>
                                        <Typography variant='h6'> {product.qty}</Typography>
                                    </Box>

                                </>}

                            </>)}


                        </Stack>
                    </>)}

            </Grid>
            <Grid md={6}>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant='h4' color="text.secondary" gutterBottom>
                            Price Details
                        </Typography>

                        <Stack direction="row" justifyContent="space-between">

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                888
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                888
                            </Typography>
                        </Stack>

                        <Divider />
                        <Stack direction="row" justifyContent="space-between">

                            <Typography variant='h4' color="text.secondary">
                                Total
                            </Typography>
                            <Typography variant='h4' color="text.secondary">
                                {sum}

                            </Typography>
                        </Stack>
                        <Typography variant='h6' color="green">
                            You have saved 400. On This Order
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/user/checkout'>CheckOut</Link>
                    </CardActions>
                </Card>

            </Grid>




        </Grid>


    </>
}


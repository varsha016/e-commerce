import React, { useEffect, useState } from 'react'
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
import { cartHistoryAction, deleteCartHistoryAction, emptyCartitemAction, removeSingleCartItemAction } from '../redux/users/actions/cartAction';
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import { Alert, Button, Card, CardActions, CardContent, CircularProgress } from '@mui/material';
import { getOrdersData } from '../redux/users/reducer/orderReducer';
import { getProducts } from '../redux/users/reducer/productReducer';
import { getAllProductAction } from '../redux/users/actions/productAction';

function Cart() {

    const dispatch = useDispatch()
    const [sum, setSum] = useState()
    const { products } = useSelector(getProducts)
    const { cart, loading, toggle, getCartError } = useSelector(getCartData)
    const { initiatePaymentError } = useSelector(getOrdersData)
    // useEffect(() => {
    //     const x = products.filter(item => item.stock < cart.filter(i => i.stock))
    //     dispatch(getAllProductAction())
    // }, [])



    useEffect(() => {
        dispatch(cartHistoryAction())
    }, [toggle])

    let totalPrice = 0
    useEffect(() => {

        totalPrice += cart.reduce((t, i) => t + i.price * i.qty, 0)
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

    return (<>

        <Grid container sx={{ padding: "0px 4rem" }} >

            <Grid md={6} >
                <Button variant='contained' color='error'
                    onClick={e => dispatch(emptyCartitemAction())}>Empty Cart</Button>
                {
                    cart && cart.map(item => <>
                        <Stack direction="row" mt={4} gap={2} sx={{ border: item.qty > item.stock ? "5px solid red" : "" }}>

                            <img variant='square' alt="Remy Sharp" src={`${item.image && item.image[0]}`} className='img-fluid' />
                            <Box>

                                <Typography variant='h6'>Price: {item.price}</Typography>
                                <Typography variant='h6'>Quntity: {item.qty}</Typography>
                                <Typography variant='h6'>Discription: {item.desc}</Typography>
                                <Button variant='contained' size='medium' color='error' onClick={e => dispatch(removeSingleCartItemAction(item._id))}>Remove-Item</Button>
                            </Box>



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
                                Price:-
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                77
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
    )
}

export default Cart
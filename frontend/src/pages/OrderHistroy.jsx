import { Alert, Avatar, Button, CircularProgress, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrderAction, getOrderHistroyAction } from '../redux/users/actions/orderActions'
import { getOrdersData } from '../redux/users/reducer/orderReducer'
import Grid from '@mui/material/Unstable_Grid2';
import { URL } from '../redux/api'

function OrderHistroy() {
    const dispatch = useDispatch()
    const { loading, orders, orederHisetroyError, toggle } = useSelector(getOrdersData)
    useEffect(() => {
        dispatch(getOrderHistroyAction())
    }, [toggle])
    if (loading) {
        return <CircularProgress />
    }
    if (orederHisetroyError) {
        return <Alert severity='error'>{orederHisetroyError}</Alert>
    }

    return <>
    <pre>{JSON.stringify(orders)}</pre>
        <Grid container>

            <Grid item mdOffset="2" md={8} >
                {
                   orders&&orders.map(item =>
                        <Paper>
                            <Typography variant='h6'>orders : {item.orderStatus}</Typography>
                            {
                                item.products.map(single => <>
                                    <Avatar src={`${URL}/${single?.productId?.image[0]}`} />
                                    <Typography>Prodyct Name:-{single?.productId?.name}</Typography>
                                    <Typography>Product Price:-{single?.productId?.price}</Typography>
                                    <Typography>Product Qty :-{single?.productId?.qty}</Typography>
                                </>

                                )
                            }
                            {item.orderStatus !== "cancle"}
                            <Button Button variant="outlined" onClick={e => dispatch(cancelOrderAction(item._id))} color="error">
                                Cancle
                            </Button>

                        </Paper>)
                }

            </Grid>
        </Grid>



    </>
}

export default OrderHistroy
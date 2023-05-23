import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Avatar, Button, Paper, Stack, styled, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../redux/users/reducer/productReducer';
import { getProductDetailAction } from '../redux/users/actions/productAction';
import { URL } from '../redux/api';
import { addToCardAction, cartHistoryAction } from '../redux/users/actions/cartAction';
import { getCartData } from '../redux/users/reducer/cartReducer';

export default function ProductDetail() {
    const { singleProduct } = useSelector(getProducts)
    const { toggle } = useSelector(getCartData)
    // console.log(singleProduct);
    const [qty, setQty] = useState(1)
    const [currentImg, setCurrentImg] = useState(0)
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getProductDetailAction(id))
    }, [])
    useEffect(() => {
        dispatch(cartHistoryAction())


    }, [toggle])



    if (singleProduct.image) {
        return (<>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid sm={6}>
                        <Grid container spacing={2}>
                            <Grid sm={2}>
                                <Stack direction="column" spacing={2}>
                                    {
                                        singleProduct.image.map((item, i) => <img
                                            onMouseOver={e => setCurrentImg(item)}
                                            src={`${item}`} alt="" />)}

                                </Stack>

                            </Grid>
                            <Grid xs={10} >
                                {
                                    <img src={`${singleProduct.image[currentImg]}`}
                                        alt={singleProduct.image} style={{ maxHeight: 350, maxWidth: 350 }} />
                                }
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid mdOffset={4} md={4}>

                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" onClick={e => setQty(qty === 1 ? 1 : qty - 1)} >-</Button>
                                    <h1>{qty}</h1>
                                    <Button variant="contained" onClick={e => setQty(singleProduct.stock === qty ? qty : qty + 1)}>+</Button>
                                </Stack>


                            </Grid>
                            {singleProduct.stock > 0 ? <>
                                <Grid mdOffset={3} md={6}>

                                    <Stack spacing={2} direction="row">
                                        <Button color='error'
                                            variant="contained">
                                            <Link to={`/user/buynow/${id}/${qty}`} >Buy Now</Link>
                                        </Button>

                                        <Button variant="contained" onClick={e => dispatch(addToCardAction(
                                            { productId: singleProduct._id, qty }))} >Add To Card</Button>
                                    </Stack>
                                </Grid>
                            </>
                                : <h1 style={{ color: "green", marginRight: "20px" }}>out off stock</h1>}
                        </Grid>
                    </Grid>
                    <Grid sm={6}>
                        <Typography variant="h4">{singleProduct.name}</Typography>
                        <Typography variant="h5">{singleProduct.price}</Typography>
                        <Typography>{singleProduct.desc}</Typography>
                    </Grid>

                </Grid>
            </Box>

        </>
        )

    }

}
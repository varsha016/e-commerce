
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInfiniteProductAction, getAllProductAction } from '../redux/users/actions/productAction';
import { getProducts } from '../redux/users/reducer/productReducer';
import { Alert, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component'
export default function BestsellerProducts() {
    const { products, loading, getProductError } = useSelector(getProducts)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const getAllproduct = () => {
        dispatch(getAllInfiniteProductAction({
            limit: 1,
            currentPage
        }))
        setCurrentPage(pre => pre + 1)

    }
    useEffect(() => {
        dispatch(getAllProductAction())

    }, [])
    useEffect(() => {
        getAllproduct()

    }, [])

    if (products.length === 0) {
        return `<h1>No Product Found</h1>`
    }
    if (loading) {
        return <CircularProgress />
    }
    if (getProductError) {
        return <Alert variant='error'>{getProductError}</Alert>
    }
    return (<>

        <InfiniteScroll
            dataLength={products.length}
            next={getAllproduct}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        // scrollableTarget="scrollableDiv"
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {
                        products.map((item, i) => <Grid xs={4} key={item._id}>

                            <ProductCard product={item} />

                        </Grid>)
                    }


                </Grid>
            </Box>
        </InfiniteScroll>

    </>




    );
}
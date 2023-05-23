import React from 'react'
import BestsellerProducts from '../components/BestSellerProducts'
import Carousel_mui from '../components/Carousel_mui'
import { ErrorBoundary } from "react-error-boundary"
// const Carousel_mui = lazy(() => import("./../components/Carousel_mui"))

export default function Home() {
    const fallback = ({ error, resetErrorBoundary }) => {
        return <h1>{error.message}</h1>
    }
    return <>
        {/* <Suspense fallbacl={<h1> carousel Loading ............</h1>}>
        </Suspense> */}
        <ErrorBoundary fallbackRender={fallback}>
            <Carousel_mui />
        </ErrorBoundary>

        <ErrorBoundary fallbackRender={fallback}>
            <BestsellerProducts />
        </ErrorBoundary>

    </>
}

import React, { useEffect, useState } from 'react'

function useDebounce(val, delay = 500) {
    const [searchTerm, setsearchTerm] = useState(val)
    useEffect(() => {
        const timer = setTimeout(e => { setsearchTerm(val) }, delay)
        return e => clearTimeout(timer)
    }, [val, delay])
    return searchTerm
}

export default useDebounce
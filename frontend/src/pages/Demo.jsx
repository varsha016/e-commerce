import React, { useEffect, useState } from 'react'

function Demo() {
    const [inp, setInp] = useState("")
    const fatchResult = () => { console.log("Api Call"); }
    useEffect(() => {
        const timer = setTimeout(() => fatchResult(), 2000)

        return e => clearTimeout(timer)
    }, [inp])
    return <>

        <input type="text" onChange={e => setInp(e.target.value)} name="" id="" />
    </>
}

export default Demo
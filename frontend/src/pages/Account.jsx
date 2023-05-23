// import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardActions, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { getUserProfileAction, updateUserProfileAction } from '../redux/users/actions/userAction';
import { getUserAuthData } from '../redux/users/reducer/authReducer';
import { useTheme } from '@emotion/react';
import { getUserData } from '../redux/users/reducer/userReducer';

function Account() {
   
    
    const { userLogin, } = useSelector(getUserAuthData)
    const { profile,toggle } = useSelector(getUserData)
    const [userData, setUserData] = useState({})
    const [selected, setSelected] = useState()
    const [fleids, setFleids] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
      
    const keynames=[]
    if (profile) {
        for(const [key,val] of Object.entries(profile)){
         keynames.push(key)
        }
        setFleids(keynames)
    }
    
     
    }, [profile])
    
    useEffect(() => {
      dispatch(getUserProfileAction())
      setSelected(null)
    }, [toggle])
    
    const [count, setCount] = useState(-2)
   
    
    return <>
   
        {JSON.stringify(userData, null, 2)}
        <Grid container>
            <Grid md={8} mdOffset={2} >
                <pre>{JSON.stringify(userData)}</pre>
                <Card>
                    <CardContent>
                        {
                             fleids.map(item => <>
                                <Stack direction={"row"} justifyContent="space-between">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {item}
                                    </Typography>

                                    <Typography color="green" gutterBottom>
                                        {profile && profile[item] 
                                        ?<>
                                        {item=== selected
                                        ?<>
                                           <TextField type="text"
                                       value={userData[item]}
                                            onChange={e => setUserData({ ...userData, [item]: e.target.value })}
                                            placeholder={`please enter  ${item}`} />
                                        </>
                                        :  profile[item]
                                        }
                                        {
                                            item!=="name"&& item!=="email" && <Button onClick={e=>setSelected(item)}>Edit</Button>
                                        }
                                      
                                    

                                       
                                        </>  
                                        : <TextField type="text"
                                            onChange={e => setUserData({ ...userData, [item]: e.target.value })}
                                            placeholder={`please enter mobile no ${item}`} />}
                                    </Typography>
                                </Stack>


                            </>)
                        }

                    </CardContent>
                    <CardActions>
                        <Button onClick={e => dispatch(updateUserProfileAction({ ...userData}))} size="small">update Profile</Button>
                    </CardActions>
                </Card>


            </Grid>
        </Grid>

    </>
}

export default Account
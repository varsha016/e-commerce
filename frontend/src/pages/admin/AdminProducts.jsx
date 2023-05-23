import { Box, Button, Card, CardContent, CardMedia, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAdminProductAction, getAdminProductAction } from '../../redux/admin/action/employeeAction'
import { employeeData } from '../../redux/admin/reducer/employeeReducer'
import { URL } from '../../redux/api'
import EditModals from './EditModals'



function AdminProducts() {

  const [edit, setEdit] = useState()
  const { adminGetProduct, toggle, deteleProducts, updateProducts } = useSelector(employeeData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAdminProductAction())

  }, [deteleProducts, updateProducts])
  // modal code start
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // modal code end



  return <>

    {JSON.stringify(adminGetProduct, null, 2)}

    <div className="continer">
      <div className="row">
        <div className="col-sm-4">

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>


              {
                adminGetProduct && adminGetProduct.map((item, i) => <Grid xs={4} key={item._id}>


                  <Card sx={{ maxWidth: 345, marginTop: 6 }} >
                    <CardMedia
                      component="img"
                      height="200"
                      image={`${item.image[0]}`}
                      alt={`${item.image[0]}`}
                    />
                    <CardContent>
                      <Typography variant="h6" color="green">
                        ₹{item.name}
                      </Typography>
                      <Typography variant="h6" color="green">
                        ₹{item.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {item.brand}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {item.desc}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {item.category}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {item.stock}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        Publish:- {item.publish}
                      </Typography>



                    </CardContent>
                    <Typography>
                      <Button variant='outlined' color='secondary' onClick={e => {
                        console.log(item);
                        setEdit(item)
                        handleOpen()
                      }}  >Details</Button>

                      <Button variant='outlined' color='error'
                        onClick={e => dispatch(deleteAdminProductAction(item))}>Detele</Button>
                    </Typography>
                  </Card>

                </Grid>)
              }


            </Grid>
          </Box>
        </div>
        <div className="col-sm-4">
          {edit && <EditModals edit={edit} open={open} handleClose={handleClose} />}



        </div>


        <div className="col-sm-4">

        </div>


      </div>
    </div>



  </>
}

export default AdminProducts
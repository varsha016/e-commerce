import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function PaymentForm({ setMode }) {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3} marginTop={10} paddingX={5}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Choose Payment Method</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="online"
                        name="paymentmode"
                    >
                        <FormControlLabel onChange={e => setMode(e.target.value)} value="POD" control={<Radio />} label="pay On Delivery" />
                        <FormControlLabel onChange={e => setMode(e.target.value)} value="online" control={<Radio />} label="pay Online" />
                    </RadioGroup>
                </FormControl>

            </Grid>
        </React.Fragment>
    );
}
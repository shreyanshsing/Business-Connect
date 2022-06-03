import { Box, Button, Checkbox, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

function Form() {
  return (
    <Paper elevation={3} sx={{ display: 'flex', marginTop: '3.5rem', marginLeft: 'auto', marginRight: 'auto', width: '950px'}}>
        <Box sx={{width: '30%', display: 'flex', alignItems: 'center', margin: '1rem', padding: '1.5rem', marginRight: '2rem', borderRight: '1px solid lightgrey'}}>
            <Typography variant='h4' gutterBottom>
                Tell us what you Need, <br/> we will get you quotes.
                <br/> Simple Right?
            </Typography>
        </Box>
        <Box sx={{display: 'grid', gridTemplateRows: '1fr 1fr 1fr', width: '60%', margin: '1rem', marginLeft: '2rem', padding: '1.5rem'}}>
            <TextField 
                type="text"
                variant='outlined'
                label='Enter Product or Service Name'
                sx={{marginTop: '0.5rem'}}
                required
            />
            <div>
                <TextField
                    type={'number'}
                    variant='outlined'
                    label='Enter Quantity'
                    required
                    sx={{marginTop: '0.5rem'}}
                />
                <OutlinedInput 
                    type={'number'}
                    placeholder={'Enter Phone Number'}
                    sx={{marginTop: '0.5rem', marginLeft: '0.5rem', width: '34ch'}}
                    required
                    startAdornment={<div>+91-</div>}
                />
            </div>
            <Typography variant='caption' gutterBottom>
                <Checkbox defaultChecked/>
                Recieve Whats App Notification
            </Typography>
            <Button variant='outlined'>Submit</Button>
        </Box>
    </Paper>
  )
}

export default Form
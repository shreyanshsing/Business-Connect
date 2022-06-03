import { Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styled from '@emotion/styled';

export const CustomCell = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`

function Categories() {
  return (
      <Container>
            <Typography variant='h4' textAlign={'center'} sx={{marginTop: '3rem'}} gutterBottom>
                <Divider textAlign='center' orientation='horizontal'><small>Explore By Category</small></Divider>
            </Typography>
            <Grid container spacing={3} columnSpacing={3} sx={{marginTop: '2rem'}}>
                <CustomCell item xl={2} sm={6}>
                    <div>
                        <MedicalServicesOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/><br/>
                        <Typography variant='body1'>Drugs & Pharma</Typography>
                    </div>
                </CustomCell>
                <CustomCell item xl={2} md={4} xs={6}>
                    <div>
                        <FastfoodOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography variant='body1'>Food & Agriculture</Typography>
                    </div>
                </CustomCell>
                <CustomCell item xl={2} md={4} xs={6}>
                    <div>
                        <DirectionsBusFilledOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography variant='body1'>Transportation Sector</Typography>
                    </div>
                </CustomCell>
                <CustomCell item xl={2} md={4} xs={6}>
                    <div>
                        <ElectricBoltOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography variant='body1' >Electornics & Electrical</Typography>
                    </div>
                </CustomCell>
                <CustomCell item xl={2} md={4} xs={6}>
                    <div>
                        <ConstructionOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography variant='body1' >Tools & Equipment</Typography>
                    </div>
                </CustomCell>
                <CustomCell item xl={2} md={12} xs={12}>
                    <div>
                        <AddOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography variant='body1' >View All Categories</Typography>
                    </div>
                </CustomCell>
            </Grid>
      </Container>
  )
}

export default Categories
import styled from '@emotion/styled'
import { Button, IconButton, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const ContainerDiv = styled.div`
    max-height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #6699ff;
    color: antiquewhite;
    @media screen and (max-width: 620px) {
        grid-template-columns: 1fr;
        text-align: center;
        text-align: center;
    }
`

export const CustomDiv = styled.div`
    padding: 1rem;
    width: inherit;
    height: inherit;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`

export const Img = styled.img`
    width: 150px;
    height: 150px;
    margin: 1rem;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    box-shadow: 5px 5px 10px #6699ff;
    @media screen and (max-width: 620px) {
        width: 75px;
        height: 75px;
        margin: 5px;
    }
`

export const Input = styled(OutlinedInput)`
    color: antiquewhite;
`

export const CustomButton = styled(Button)`
    right: -13px;
    bottom: 0%;
    color: antiquewhite;
`

function Footer() {
  return (
    <ContainerDiv>
        <CustomDiv>
            <Img src={'/assests/images/Business Connect.png'} alt='logo'/>
        </CustomDiv>
        <CustomDiv style={{}}>
            <Typography variant='body2' gutterBottom>
                Connect with us on Social Media
            </Typography>
            <div style={{width: '100%'}}>
                <IconButton>
                    <FacebookIcon />
                </IconButton>
                <IconButton>
                    <TwitterIcon />
                </IconButton>
                <IconButton>
                    <LocalPostOfficeIcon />
                </IconButton>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </div>
        </CustomDiv>
        <CustomDiv>
            <Typography variant='body2' gutterBottom>About Us</Typography>
            <Typography variant='body2' gutterBottom>Contact Support</Typography>
            <Typography variant='body2'  gutterBottom>Blogs</Typography>
            <Typography variant='body2'  gutterBottom>Technical Insights</Typography>
            <Typography variant='body2'  gutterBottom>Team</Typography>
        </CustomDiv>
        <CustomDiv>
            <Typography variant='body2' gutterBottom>Subscribe to our Newsletter</Typography>
            <div style={{display:'relative'}}>
                <Input 
                    size='small'
                    fullWidth 
                    placeholder='Email'
                    required
                    endAdornment={<CustomButton variant='outlined' size={'large'}>Subscribe</CustomButton>}
                />
            </div>
        </CustomDiv>
    </ContainerDiv>
  )
}

export default Footer
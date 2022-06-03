import styled from '@emotion/styled';
import { Box, Button, Tooltip } from '@mui/material';
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CallIcon from '@mui/icons-material/Call';

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6699ff;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
`
export const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: 1ch;
    padding: 1rem;
    color: antiquewhite;
    margin-left: 1rem;
    display: flex;
    align-items: center;
`

function Header() {
  return (
    <HeaderDiv>
        <Title>
            {/* <img src={`/assests/images/Business.png`} width={50} height={50} alt="logo"/> */}
            Business Connect
        </Title>
        <Box sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm:'none', xs:'none' } }}>
            <Tooltip title={'Please login to explore more.'}>
                <Button variant='text' size='small' sx={{color: 'antiquewhite', marginRight: '2rem'}} endIcon={<LoginIcon sx={{color: 'antiquewhite'}}/>}>
                    Login
                </Button>
            </Tooltip>
            <Button variant='text' size='small' sx={{color: 'antiquewhite', marginRight: '2rem'}} endIcon={<HelpOutlineIcon sx={{color: 'antiquewhite'}}/>}>
                Help
            </Button>
            <Button variant='text' size='small' sx={{color: 'antiquewhite', marginRight: '2rem'}} endIcon={<CallIcon sx={{color: 'antiquewhite'}}/>}>
                Contact
            </Button>
        </Box>
    </HeaderDiv>
  )
}

export default Header;
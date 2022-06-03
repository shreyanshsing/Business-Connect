import React from 'react'
import styled from "@emotion/styled"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, OutlinedInput,Paper,Rating,Typography} from "@mui/material"
import img1 from "./assests/icons-hand.png";
import img2 from "./assests/icons-copy.png";
import img3 from "./assests/icons-support.png";
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Header from './Header';
import Categories from './Categories';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import Carousel from 'react-material-ui-carousel'
import { LandingPageImages, reviews } from './assests/data';
import Form from './Form';

export const ContainerDiv = styled.div`

`
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

export const ContentDiv = styled.div`
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 10rem;
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

export const InfoDiv = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 15px;
    margin-top: 3rem;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
`

export const CustomButton = styled(IconButton)`
    background-color: #33bbff;
    color: antiquewhite;
    border: 1px solid antiquewhite;
    &:hover{
        border: 1px solid #33bbff;
        color: #33bbff;
    }
`

export const Img = styled.img`
    width: 320px;
    height: 320px;
    box-shadow: 2px 2px 5px lightblue;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: inline;
`

function LandingPage() {

  return (
    <ContainerDiv>
        <HeaderDiv>
            <Title>
                {/* <img src={`/assests/images/Business.png`} width={50} height={50} alt="logo"/> */}
                Business Connect
            </Title>
            <Header/>
        </HeaderDiv>
        <ContentDiv>
            <Grid container spacing={3}>
                <Grid item xl={2} md={3}></Grid>
                <Grid item xl={8} md={6} sm={12}>
                    <Typography textAlign={'center'} sx={{fontSize: '20px', fontWeight: '500'}} variant='body1' gutterBottom>
                       <q>A B2B platform for all needs. <br/> Find your perfect retailer or supplier in a single platform.</q> 
                    </Typography>
                </Grid>
                <Grid item xl={2} md={3}></Grid>
                <Grid item xl={3}></Grid>
                <Grid item xl={6} sx={{textAlign: 'center'}}>
                    <OutlinedInput 
                        placeholder='Enter Product or Service Name'
                        required
                        startAdornment={<IconButton sx={{marginRight: '10px'}}><FilterAltOutlinedIcon sx={{color: '#33bbff'}} /></IconButton>}
                        endAdornment={<IconButton sx={{marginLeft: '10px'}}><SearchIcon sx={{color: '#33bbff'}} /></IconButton>}
                        inputProps={{
                            style:{
                                marginRight: '10px'
                            },
                            'aria-label': 'search',
                        }}
                        fullWidth
                        inputComponent={'input'}
                        autoFocus
                    />
                    <Button variant="contained" sx={{marginTop: '1rem'}}> Get Quote</Button>
                </Grid>
            </Grid>
            <Categories/>
            <div  style={{width: '100%', marginTop: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'center'}}>
                <Carousel sx={{width: '550px'}}>
                    {
                        LandingPageImages.map((item) => (
                            <CardMedia>
                                <img width={550} height={350} style={{borderRadius: '10px', boxShadow: '2px 2px 5px lightgrey'}} src={item} alt={'slideshow'}/>
                            </CardMedia>
                        ))
                    }
                </Carousel>
            </div>
            <Paper elevation={3} sx={{ display: 'flex', marginTop: '2.5rem'}}>
                <Box sx={{width: '30%', margin: '1rem', padding: '1.5rem', marginRight: '2rem', borderRight: '1px solid lightgrey'}}>
                    <Typography variant='h4' gutterBottom>
                        We Connect Small Bussiness & Enterprises to Retailers and Suppliers.
                    </Typography>
                    <Typography gutterBottom>
                        Business Connect is India's largest online B2B marketplace, connecting buyers with suppliers.
                    </Typography>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: '60%', margin: '1rem', marginLeft: '2rem', padding: '1.5rem'}}>
                    <div style={{textAlign: 'center'}}>
                        <SelfImprovementOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Hassel free Platform</Typography>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <AssuredWorkloadOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Trusted & Secure</Typography>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <CurrencyRupeeOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Secure Payment Methods</Typography>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <WhatsappOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Free SMS & WhatsApp services</Typography>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <ConnectingAirportsOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Logistics Support</Typography>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <DescriptionOutlinedIcon fontSize='large' sx={{color: '#33bbff'}}/>
                        <Typography gutterBottom>Free Billing Services</Typography>
                    </div>
                </Box>
            </Paper>
            <Typography variant='h4' textAlign={'center'} sx={{marginTop: '3rem'}} gutterBottom>
                <Divider textAlign='center' orientation='horizontal'><small>Insights</small></Divider>
            </Typography>
            <InfoDiv>
                <Typography sx={{borderRight: '1px solid #0088cc', }} variant='h4'>
                    100+ <br/> Verified Retailers
                </Typography>
                <Typography  variant='h4' sx={{borderRight: '1px solid #0088cc',}} >
                    100+ <br/> Active Customers
                </Typography>
                <Typography sx={{borderRight: '1px solid #0088cc', }}  variant='h4' >
                    18+ <br/> Categories
                </Typography>
                <Typography  variant='h4'>
                    80+ <br/> Verified Sales
                </Typography>
            </InfoDiv>
            <Divider sx={{marginTop: '2.5rem', marginBottom: '2.5rem'}}/>
            <Form/>
            <Grid container spacing={3} rowGap={3}> 
                <Grid item xl={12} md={12} xs={12} sm={12}>
                    <Typography variant='h4' textAlign={'center'} sx={{marginTop: '3rem'}} gutterBottom>
                        <Divider textAlign='center' orientation='horizontal'><small>Reviews & Feedbacks</small></Divider>
                    </Typography>
                </Grid>
                <Grid item xl={12}>
                    <Carousel sx={{width: '550px', marginLeft: 'auto', marginRight: 'auto'}}>
                        {
                            reviews.map((item, index) => (
                                <Card key={index} sx={{boxShadow: '5px 5px 15px lightgrey', borderRadius: '5px', border: '1px solid lightgrey'}}>
                                    <CardHeader title={item.name}/>
                                    <CardContent>
                                        <Typography variant='body2' gutterBottom>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Rating value={item.rating}/>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Carousel>
                </Grid>
                <Grid item xl={4} md={6} sm={12} sx={{textAlign:'center'}}>
                    <img src={img1} alt="hand" />
                    <Typography variant='body1' gutterBottom>Find amazing deals with trusted retailers only.</Typography>
                </Grid>
                <Grid item xl={4} md={6} sm={12} sx={{textAlign:'center'}}>
                    <img src={img2} alt="hand" />
                    <Typography variant='body1' gutterBottom>We have right choices for your needs.</Typography>
                </Grid>
                <Grid item xl={4} md={12} sm={12} sx={{textAlign:'center'}}>
                    <img src={img3} alt="hand" />
                    <Typography variant='body1' gutterBottom>Need help we are available 24/7 for you. Just ask!</Typography>
                </Grid>
            </Grid>
        </ContentDiv>
        <Footer />
    </ContainerDiv>
  )
}

export default LandingPage;
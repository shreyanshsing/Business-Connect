import styled from '@emotion/styled';
import { CardMedia, IconButton } from '@mui/material';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectorSlideShow, setPrev, setNext, setAssests } from './redux/SldieShow.slice';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface IProps {
    assests: string[] //images should be present under public/assests/images folder
}

export const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    transition: width 2s ease-in-out 2s;
`

export const Img = styled.img`
    width: 250px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px lightgray;
    @media screen and (min-width: 720px) {
        width: 400px;
        height: 300px;
    }
`

function SlideShow(props: IProps) {
    const { currentSlide, assests } = useSelector(selectorSlideShow)
    const dispatch = useDispatch()

    useEffect(() => {
        if(props.assests){
            dispatch(setAssests(props.assests))
        }
    }, [dispatch, props.assests])

    const handleNext = useCallback(() => {
        dispatch(setNext())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide])

    

    useEffect(() => {
        console.log('render')
        if(assests && assests.length > 0){
            window.setTimeout(() => {
                handleNext()
            }, 2000)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <ContentDiv>
            <IconButton onClick={() => dispatch(setPrev())} sx={{margin: '1rem'}}>
                <ChevronLeftIcon/>
            </IconButton>
            {
                props.assests && props.assests.map((item: any, index: number) => {
                    if(index === currentSlide){
                        return(
                            <CardMedia key={`key-${index}`}>
                                <Img src={item} alt='img'/>
                            </CardMedia>
                        )
                    }else{
                        return (null)
                    }
                })
            }
            <IconButton onClick={() => dispatch(setNext())} sx={{margin: '1rem'}}>
                <ChevronRightIcon/>
            </IconButton>
        </ContentDiv>
    )
}


export default SlideShow;

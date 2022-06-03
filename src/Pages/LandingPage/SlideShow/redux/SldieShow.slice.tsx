import { createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    currentSlide: number,
    assests: string[]
}

const initialState: IInitialState = {
    currentSlide: 0,
    assests: []
}

export const SlideShowReducer = createSlice({
    name: 'SlideShowReducer',
    initialState: initialState,
    reducers: {
        setAssests: (state: any, action) => {
            state.assests = action.payload
        },
        setNext: (state: any) => {
            if(state.currentSlide !== state.assests.length-1){
                state.currentSlide += 1
            }else{
                state.currentSlide = 0
            }
        },
        setPrev: (state: any) => {
            if(state.currentSlide !== 0){
                state.currentSlide -= 1
            }else{
                state.currentSlide = state.assests.length-1
            }
        }
    }
})

export const { setNext, setPrev, setAssests } = SlideShowReducer.actions

export default SlideShowReducer.reducer;

export const selectorSlideShow = (state: { slideShow: any }) => state.slideShow;
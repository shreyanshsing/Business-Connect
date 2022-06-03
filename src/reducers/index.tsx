import { combineReducers } from "@reduxjs/toolkit"
import SlideShowReducer from "../Pages/LandingPage/SlideShow/redux/SldieShow.slice"
 
const rootReducer = combineReducers({
    slideShow: SlideShowReducer
}) 

export default rootReducer
import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    userName: "",
    password : "",
    show: true,
    hamburger: false,
    data: [],
    showPopup: false,
    selectedItem: null,
    home: false,
    dashboard: true,
    earn: false,
}


const slice = createSlice({
    name : "cart",
    initialState : INITIAL_STATE,
    reducers:{
        setUserName: (state, action)=>{
           state.userName = action.payload
        },
        setPassword: (state, action)=>{
            state.password = action.payload
        },
        setShow: (state, action)=>{
            state.show = !state.show;
        },
        setHamburger: ((state, action) =>{
            state.hamburger = !state.hamburger;
        }),
        setData: ((state, action) =>{
            state.data = action.payload
        }),
        setShowPopup:((state, action) =>{
            state.showPopup = !state.showPopup
        }),
        setSelectedItem:((state, action) =>{
            state.selectedItem = action.payload
        }),
        setHome:((state, action) =>{
            state.home = action.payload
        }),
        setDashboard:((state, action) =>{
            state.dashboard = action.payload
        }),
        setEarn:((state, action) =>{
            state.earn = action.payload
        })

    }
})

export const {setUserName, setPassword, setShow, setHamburger, setData, setShowPopup, setSelectedItem, setHome, setDashboard, setEarn} = slice.actions
export default slice.reducer;
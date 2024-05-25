// billList related store 
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill', 
    // data state
    initialState: {
        billList: []
    }, 
    reducers: {
        // Synchronous modification method
        setBillList(state, action) {
            state.billList = action.payload
        }, 
        // Synchronous adding bill method 
        addBill (state, action) {
            state.billList.push(action.payload)
        }
    }
})

// Deconstruct actionCreator function
const { setBillList, addBill } = billStore.actions

// Write asynchronous logic
const getBillList = () => {
    return async (dispatch) => {
        // Write asynchronous request 
        const res = await axios.get('http://localhost:8888/ka')
        //Trigger synchronous reducer
        dispatch(setBillList(res.data))
    }
}

const addBillList = (data) => {
    return async (dispatch) => {
        // Write asynchronous request 
        const res = await axios.post('http://localhost:8888/ka', data)
        //Trigger synchronous reducer
        dispatch(addBill(res.data))
    } 
}

export { getBillList, addBillList }
// export reducer 
const reducer = billStore.reducer

export default reducer
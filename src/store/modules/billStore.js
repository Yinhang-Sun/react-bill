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
        }
    }
})

// Deconstruct actionCreator function
const { setBillList } = billStore.actions

// Write asynchronous logic
const getBillList = () => {
    return async (dispatch) => {
        // Write asynchronous request 
        const res = await axios.get('http://localhost:8888/ka')
        //Trigger synchronous reducer
        dispatch(setBillList(res.data))
    }
}

export { getBillList }
// export reducer 
const reducer = billStore.reducer

export default reducer
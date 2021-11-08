import {configureStore} from "@reduxjs/toolkit";
import toDoItemsReducer from "./toDoItemsReducer"

export default configureStore({
    reducer:{
              toDoItems:toDoItemsReducer
    }
})
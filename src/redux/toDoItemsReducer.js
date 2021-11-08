
import {createSlice} from "@reduxjs/toolkit";


const ToDoItemsSlice = createSlice({
    name:"toDoItems",
    initialState:{
        toDoItems:[],
       
    },

    reducers:{
        UpdateToDoItem:(state,action)=>{

                 
           var toDoItem = action.payload;
           if(toDoItem.status<2)
           {
               toDoItem.status+=1;
            var foundIndex = state.toDoItems.findIndex(x => x.id === toDoItem.id);
            state.toDoItems[foundIndex] = toDoItem;
           }
         

        },
        
        InitToDoItems:(state,action)=>{
           
                       
            var item = action.payload;
            
            state.toDoItems = [];

           state.toDoItems.push(...item.toDoItems);
         
         }
    },
});

export const {UpdateToDoItem,InitToDoItems} = ToDoItemsSlice.actions
export default ToDoItemsSlice.reducer
import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';

const ListItems = styled.div`flex:1;display:flex;flex-direction:column;overflow:auto;margin:5px;`;
const Status = styled.span`font-weight:bold;text-align:center;flex:1;height:30px;padding:10px;`;

const ColumnListItems = ({items,status,title}) => {
    return (
        <ListItems>
        <Status>{title}</Status> 
            {items.filter(el=>el.status===status).map(item =>(
        <TodoItem key={item.id} item={item}/>
                     ) )}
        </ListItems>
    )
}

export default ColumnListItems

import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const Container = styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:40vh;
${mobile({padding:"1px",flexDirection:"column"})}
`;
const List = styled.div`
padding:5px;
border : solid 0.5px blue;
display:flex;
flex-direction:column;
overflow:auto;
`;
const Title = styled.h1`margin-bottom:10px;`;

const TaskList = () => {

    const toDoItems = useSelector(state=>state.toDoItems.toDoItems);
   
    return (
        <Container>
             <Title>Tickets List</Title>
                <List>
                {toDoItems.slice().sort((a,b)=>a.status-b.status).map(item =>(
                <TodoItem key={item.id} item={item} position="h"/>
                                ) )}
                </List>
        </Container>
    )
}

export default TaskList

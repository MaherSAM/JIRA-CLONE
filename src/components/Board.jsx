import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import ColumnListItem from './ColumnListItems';

const Container = styled.div`padding:20px;
display:flex;
flex-direction:column;
height:40vh;
${mobile({padding:"1px"})}`;

const Title = styled.h1`margin-bottom:10px;`;
const List = styled.div`display:flex;border: solid 0.5px blue;overflow:auto;${mobile({flexDirection:"column"})}`;


function Board() {

    const toDoItems = useSelector(state=>state.toDoItems.toDoItems);
   
    return ( 
        <Container>
               <Title>Boards</Title>
            
               <List>
              <ColumnListItem   items={toDoItems} status={0} title={"To Do"}></ColumnListItem>
              <ColumnListItem   items={toDoItems} status={1} title={"In Progress"}></ColumnListItem>
              <ColumnListItem   items={toDoItems} status={2} title={"Done"}></ColumnListItem>  
               </List>
        </Container>
    )
}

export default Board

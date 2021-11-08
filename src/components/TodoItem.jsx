import { AccountCircle } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { UpdateToDoItem } from '../redux/toDoItemsReducer';
import { useDispatch } from 'react-redux';


const Container = styled.div` position:relative;
display:flex;padding:5px 10px 5px 10px;
border:solid 0.2px blue;
margin-bottom:5px;
cursor:${props=>props.status===2?'not-allowed':'pointer'}
`;
const AssignPicture = styled.div`width:30px;height:30px;border-radius:50%;
color:white;background-color:#${props=>props.color};
display:flex;justify-content:center;align-items:center;`;

const Title = styled.h4`flex:6;margin-left:5px;margin-top:5px;text-overflow:ellipsis;`;

const Status = styled.h3`flex:1position absolute;right:10px;margin-top:5px;`;



const TodoItem = ({item,position}) => {

  const dispatch = useDispatch();

  const handleTaskClick =()=>
  {
         dispatch(
          UpdateToDoItem({ ...item})
             );
  }

    const statusLabel = () => {
        switch(item.status) {
  
          case 0:   return  <Status  > TO DO       </Status>;
          case 1:   return  <Status  > IN PROGRESS </Status>;
          case 2:   return  <Status  > DONE        </Status>;
          default :         <Status  > Unknown Status</Status>;
        }
      }

    return (
        <Container  onClick={item.status <2 ? handleTaskClick:undefined} status={item.status}>
               <AssignPicture color="e3506b">
               <AccountCircle/>
               </AssignPicture>
               <Title>{item.title}</Title>
                 {position ==="h" && statusLabel() }
        </Container>
    )
}

export default TodoItem

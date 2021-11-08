import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Board from '../components/Board';
import Footer from '../components/Footer'
import TaskList from '../components/TaskList';
import { publicRequest } from '../requestMethode';
import { useDispatch } from "react-redux";
import { InitToDoItems } from '../redux/toDoItemsReducer';
import Loader from '../components/Loader';
import initStatusForToDoItems from "../logic/toDoItemAdapters"
const Container = styled.div`
display:flex;flex-direction:column;
`;

export const Home = () => {
  
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

 

  useEffect(()=>{

    const getToDoItems = async ()=>{
        try{
                const res  = await publicRequest.get(`todos`);

                var items = initStatusForToDoItems(res.data);

                dispatch(InitToDoItems({toDoItems:items}));
                
                setIsLoaded(true);
       
            }
            catch(error)
            {
                setIsLoaded(true);
                setError(error);
            }}

            getToDoItems(); 


});

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return<Loader/>
  } else {
    return (
      
        <Container>
            <Announcement />
           
              <TaskList />
              <Board    />
              
              <Footer/>

        </Container>
)
  }

   
}
export default Home

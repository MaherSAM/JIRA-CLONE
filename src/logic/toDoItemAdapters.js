const initStatusForToDoItems =(items)=>{
    items.map(el=>{

            if(el.completed)
            {
                    el.status=2;
            }
            if(!el.completed)
            {
                    el.status=0;
            }
           
        })

        return items;
  }
  export default initStatusForToDoItems;
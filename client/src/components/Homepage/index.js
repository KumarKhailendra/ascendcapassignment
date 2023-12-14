import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import CreateList from "./CreateList";
import { MainContainer } from "./style";
import axios from 'axios'

function Homepage({user}) {
  const [allLists, setAllLists] = useState([]);


  useEffect(()=>{
    const getData = async() => {
      const data = await axios.get(`https://ascendcapassignment.onrender.com/api/list/All?id=${user?.id}`);
      setAllLists(data.data.lists);
    }
    getData();
  },[user?.id])

  console.log(allLists);
  return (
    <MainContainer>
      {allLists.map((cTaskListData, index) => {
        return (
          <TaskList
            key={index}
            user={user}
            setAllLists={setAllLists}
            cTaskListData={cTaskListData}
          />
        );
      })}

      <CreateList setAllLists={setAllLists} user={user} />
    </MainContainer>
  );
}

export default Homepage;

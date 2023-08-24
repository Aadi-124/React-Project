import "./ToDolist.css";
import * as React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import TaskList from "./TaskList.jsx";
import "./ToDolist.css";
export default function Body() {


    // Hooks
    const [val, setVal] = useState("");
    const [arr, setArr] = useState([]);


  // Funtions


    // Adds up the task to list
    const addtask = () => {
        setArr([...arr, val]);
        setVal("");
    };


    // for storing textfield data
    const changeval = (event) => {
        setVal(event.target.value);
    };



    // for deleting list item
    const deleteItem = (id) => {
        setArr((oldval) => {
        return oldval.filter((current, index) => {
            return index != id;
        });
        });
    };


  return (
    <>

     {/* Web Page Heading */}
     <center><h1>Hello World</h1></center>
      
    
    
      {/* ToDo inside container Heading */}
      <div className="container">
        <div className="heading">
          <span>ToDoList</span>
        </div>

    
    
    
        {/* TextField */}
        <div className="input">
          <TextField
            id="standard-basic"
            label="Enter Task"
            value={val}
            variant="standard"
            style={{ width: "7cm" }}
            onChange={changeval}
          />




    
        {/* Button to add Task */}
          <Button
            variant="contained"
            style={{
              fontSize: "8mm",
              padding: "1px",
              borderRadius: "10cm",
            }}
            color="success"
            onClick={addtask}
          >
            +
          </Button>
        </div>





            {/* List Container */}
        <div className="list">

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <center> Tasks </center>
              </ListSubheader>
            }
          >
            
            

            {/* Actual List */}
            {
            arr.map((item, index) => {
              return (
                <TaskList
                  text={item}
                  id={index}
                  key={index}
                  event={deleteItem}
                />
              );
            })}



          </List>
        </div>
      </div>
    </>
  );
}

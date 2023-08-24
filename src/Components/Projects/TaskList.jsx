
import { useState } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
export default function TaskList(props){

    // Hooks
    const [colour,setColour] = useState('grey');


    // Funcitons

    // for changing the delete button color
    const changetored = () =>{
        setColour('error');
    }

    const changetogrey = () =>{
        setColour('inherite');
    }



    return(
        <>

        {/* List items */}
        <div>
         <ListItemButton key={props.id} >
        <ListItemIcon>
        <div className="delbtn" onMouseOver={changetored} onMouseOut={changetogrey}>
          <DeleteIcon
            fontSize='large'
            color={colour}
            onClick={()=>{
                props.event(props.id)
            }} 
           />
      </div>
        </ListItemIcon>
        <ListItemText secondary={props.text}/>
      </ListItemButton>
        </div>
        </>
    );
}






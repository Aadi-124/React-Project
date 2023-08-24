

import './Components.css'
import { TextField } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import arr from './list.js';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel/FormLabel';

function Form(){

    const [age, setAge] = useState(20); 
    
    const updateval = (event) =>{
        setAge(event.target.value);
    }

    const listfun = (value) => {
        return(
             <MenuItem value={value} >{value}</MenuItem>   
        );
    }


    return(
        <>
        <center><h1>Registration Form</h1></center>
                
            <div class='formcontainer'>
                <TextField
                    id='formele'
                    label='Name'
                    style={{margin:'1cm'}}
                />
                <TextField
                    id='formele'
                    label='Location'
                    style={{margin:'1cm'}}
                />

<div className='formele'>
<InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    style={{width:'5.5cm'}}
    onChange={updateval}
  >

        <div style={{height:'5cm'}}>

        {arr.map(listfun)}
        </div>

    {/* <MenuItem value={19} >18</MenuItem>
    <MenuItem value={20} >19</MenuItem>
    <MenuItem value={21} >20</MenuItem>
    <MenuItem value={22} >21</MenuItem>
    <MenuItem value={23} >22</MenuItem>
    <MenuItem value={24} >23</MenuItem>
    <MenuItem value={25} >24</MenuItem>
    <MenuItem value={26} >25</MenuItem>
    <MenuItem value={27} >26</MenuItem>
    <MenuItem value={28} >27</MenuItem>
    <MenuItem value={28} >28</MenuItem>
    <MenuItem value={29} >29</MenuItem>
    <MenuItem value={30} >30</MenuItem> */}



  </Select>
</div>


    <div className='formele' style={{border:'2px solid red',width:'5cm',margin:'0px'}}>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
    </div>



            </div>
        </>
    );
}


export default Form;
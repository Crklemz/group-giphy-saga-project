import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
function Search () {

    return(
            <> 
            <FormControl>
                <TextField id="outlined-basic" label="search" variant="outlined" />
                <Select  
                 id="demo-simple-select"
                >      
                 <MenuItem value={'funny'}>Funny</MenuItem>
                <MenuItem value={'Cohort'}>Cohort</MenuItem>
                <MenuItem value={'Cartoon'}>Cartoon</MenuItem>
                <MenuItem value={'nsfw'}>nsfw</MenuItem>
                <MenuItem value={'meme'}>meme</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    color="secondary"
                     >
                    Search
                  </Button>
                
            </FormControl>
            
            </>

    )
}

export default Search;
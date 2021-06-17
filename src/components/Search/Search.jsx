import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
function Search () {

    const [newSearch, setNewSearch] = useState('')

    const handleSearchChange = (event) => {
        console.log(newSearch);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewSearch( event.target.value)
    }

    const submitSearch = event => {
        event.preventDefault();
        dispatch({ type: 'SEARCH_GIF', payload: newSearch });
        //updates the next plant to have a new id
        setNewSearch('');
    }
console.log(newSearch)
    return(
            <> 
            <FormControl  onSubmit={submitSearch}>
                <TextField onChange={handleSearchChange} value={newSearch} id="outlined-basic" label="search" variant="outlined" />
                <Select 
                defaultValue="" 
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
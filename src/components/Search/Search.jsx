import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux'
import { Gif } from '@material-ui/icons';

function Search() {

    const [newSearch, setNewSearch] = useState('');
    const [newGifId, setNewGifId] = useState('');
 

    // const fav = {newGifId, newGifUrl};

    const search = useSelector(store => store.search);

    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        console.log(newSearch);
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewSearch(event.target.value)
    }

    const submitSearch = event => {
        event.preventDefault();
        dispatch({ type: 'LOOKUP_GIF', payload: newSearch });
        //updates the next plant to have a new id
        setNewSearch('');
    }

    const setURL = (url) => {
        
        
        dispatch({ type: 'POST_GIF', payload: {category_id: newGifId, url: url}})

    }
    

    return (
        <>
            <form onSubmit={submitSearch}>
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
                    type="submit"
                    variant="contained"
                    color="secondary"
                >
                    Search
                  </Button>

        

            </form>
            <ul>
                {search.map((gif) => {
                    return (
                        <form>
                        <li key={gif.id}>
                            <img src={gif.images.original.url} onClick={event => setURL(event.target.src)}>
                            </img>
                            
                
                            <select name="Category" onChange={(event) => setNewGifId(event.target.value)}>
                                <option id="blank" >Select</option>
                                <option id="funny" value="1">Funny</option>
                                <option id="cohort" value="2">Cohort</option>
                                <option id="cartoon" value="3">Cartoon</option>
                                <option id="nsfw" value="4">NSFW</option>
                                <option id="meme" value="5">MEME</option>

                            </select>
                           
                        </li>
                        </form>
                    )
                })}
            </ul>
        </>

    )
}

export default Search;

//setNewGif({id: event.target.value, url: gif.images.original.url})

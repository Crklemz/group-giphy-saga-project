import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


function Navbar () {

    const goToSearch = () => {
        history.push('/')
    }
    
    const goToFavorites = () => {
        history.push('/favorites')
    }

    const history = useHistory();
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={goToSearch}>Search</Button>
                    <Button onClick={goToFavorites}>Favorites</Button>
                </Toolbar>
            </AppBar>
        
         </>
    )
}

export default Navbar;
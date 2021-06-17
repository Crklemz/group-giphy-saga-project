import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function favorites() {

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesList);

    useEffect(() => {
        getFavoritesList()
        
    }, []);


    const getFavoritesList = () => {

        dispatch({ type: 'GET_FAVORITES' });
    }


    return (

        <div>
            <h1>Favorites</h1>

            <table>
                <thead>
                    <tr>
                        <th></th>
                    
                    </tr>
                    {favoritesList.map((favorite, i) =>
                        <tr>
                            <td key={i}>
                                {favorite.name}
                            </td>
                            <td>
                                <img src={favorite.url} /> 
                            </td>
                        </tr>
                    )}

                </thead>
            </table>


        </div>
    )


}

export default favorites;
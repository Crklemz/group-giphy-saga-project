import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Favorites() {

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesList);

    useEffect(() => {
        getFavoritesList()
        
    }, []);


    const getFavoritesList = () => {

        dispatch({ type: 'GET_FAVORITES' });
    }


    return (
    //     <ul>
    //     {search.map((gif) => {
    //         return(
    //             <li key={gif.id}><img src={gif.images.original.url}></img></li>
    //         )
    //     })}
    // </ul>
        <div>
            <h1>Favorites</h1>
            <ul>
                {favoritesList.map((favorite) => {
                    return(
                    <li key={favorite.id}>
                        <img src={favorite.url}></img>
                        {console.log(favorite)}
                    </li>
                    )
                })}
            </ul>
         
        </div>

        // <div>
        //     <h1>Favorites</h1>

        //     <table>
        //         <thead>
        //             <tr>
        //                 <th></th>
                    
        //             </tr>
        //             {favoritesList.map((favorite, i) =>
        //                 <tr>
        //                     <td key={i}>
        //                         {favorite.name}
        //                     </td>
        //                     <td>
        //                         <img src={favorite.url} /> 
        //                     </td>
        //                 </tr>
        //             )}

        //         </thead>
        //     </table>


        // </div>
    )


}

export default Favorites;
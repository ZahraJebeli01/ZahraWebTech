import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

function CarsAPI() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    setAppState({ loading: true });
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // const axios = require('axios');    
    axios.get(apiUrl)
      .then((response) => {
        const apiData = response.data.slice(0,5);
        console.log(apiData);
        setAppState({ loading: false, posts: apiData} ) ;
        
      });
    }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default CarsAPI;
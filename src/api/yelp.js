import axios from 'axios';

export default axios.create({

  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization:'Bearer KwXmQiudCdAwcWU9necfhrzZ-MH88zPEiWi1igT3hJfzZ6cRg-_jk_OHM1YTOw-JA4qOa6TmniZBSs4AAMg2gdTnvExoCoQd6ljfkAW-bvlIOkd5CewnQIFq0znxXXYx'
  }
});


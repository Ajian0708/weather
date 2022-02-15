// mutations
export default {
  
	addWeatherData(state,data){
		state.weatherData = data;
		state.loading = 2;
	  },
	  setWoeidCity(state,paramObj){      
		state.city = paramObj.city;
		state.woeid = paramObj.woeid;      
	  },
	  setLoading(state, load){
		state.loading = load;
	  }
};

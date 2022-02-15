// actions
//import { apiSend } from "../api";
import axios from 'axios'

export default {
  getWoeid(context,city){
    axios
    .get(`/weatherapi/api/location/search/?query=${city}`)
    .then((res)=>{        
      if(res.data.length > 0){
        context.commit('setWoeidCity',{city:city,woeid:res.data[0].woeid});
        context.dispatch('getWeather');
      }else{
        context.dispatch('setLoading', 0);
      }
    })
    .catch(function (error) {        
      console.log(error);
    })
  },
  getWeather(context){
    axios
    .get(`/weatherapi/api/location/${context.state.ids}/`)
    .then((res)=>{        
      context.commit('addWeatherData',res.data.consolidated_weather);
    })
    .catch(function (error) {        
      console.log(error);
    });
  },
  setLoading(context,load){
    context.commit('setLoading',load);
  },
  async sendData({ commit },obj){
    try {
      const res = await apiSend(obj);
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  async getdetail({ commit },id){
    try {
      const res = commit('getdetail',id)
      console.log(res)
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};

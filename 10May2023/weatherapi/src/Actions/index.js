import axios from 'axios';
export default function storeWeatherInfo(lat, long) {
    var promise = axios.get(`
    https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=okB7Y1GRD5kZMXyz4BPeCWRl6XI7dmes`);
    return {
        payload: promise,
        type: "STORE_WEATHER"
    }
}
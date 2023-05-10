import { useState } from 'react';
import { connect } from 'react-redux';
import storeWeatherInfo from '../Actions';
import { bindActionCreators } from 'redux';
function Weather(props) {
    const [coords, setCords] = useState({
        lat: '',
        long: ''
    });

    const updateCoords = (event) => {

        setCords({ ...coords, [event.target.name]: event.target.value });

    }
    const getWeather = (event) => {
        event.preventDefault();
        props.storeWeatherInfo(coords.lat, coords.long);
    }
    return (
        <div>
            <form>
                <input onChange={updateCoords} type="text" name="lat" placeholder="latitude here"></input> <br></br><br></br><br></br>
                <input onChange={updateCoords} type="text" name="long" placeholder="longitude here"></input><br></br><br></br><br></br>
                <button onClick={getWeather}>Get Weather</button>

            </form>

        </div>
    )
}
export default connect((appState) => {
    console.log("appState", appState);
    return { weatherInfo: appState.weather }
},
    (dispatch) => {
        return new bindActionCreators({ storeWeatherInfo: storeWeatherInfo }, dispatch)
    }
)(Weather)





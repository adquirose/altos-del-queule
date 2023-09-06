import React, { Component } from 'react'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width:'100%',
  height:'470px'
}

const center = {lat: -39.274103, lng: -71.941902}

class Map extends Component {
  generateRandom() { 
    return Math.random () * 10000000000000000 
  } 
  render() {
    return (
      
      <LoadScript
        googleMapsApiKey="AIzaSyBX-fT0cZLTKydQN_HFfeCfHKq_Um_4cSQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          mapTypeId = {"hybrid"} 
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      
    )
  }
}

export default Map
import React, { Component } from 'react'
import { GoogleMap, KmlLayer, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width:'100%',
  height:'470px'
}
const center = {lat: -42.93138, lng: -73.63338}

class Map extends Component {
  generateRandom() { 
    return Math.random () * 10000000000000000 
  } 
  render() {
    return (
      
      <LoadScript
        googleMapsApiKey="AIzaSyBWOuE8peUbVIM-RgW0-95tVXswNfdI-JY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          mapTypeId = {"hybrid"} 
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <KmlLayer 
            url = {`https://www.google.com/maps/d/u/0/kml?mid=14Sj2smmapdpiQZerfHD3OiXiuCDwvWla&ver=${this.generateRandom()}`}
            opciones = {{preserveViewport: true}} 
          /> 
        </GoogleMap>
      </LoadScript>
      
    )
  }
}

export default Map
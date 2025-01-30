import {  View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { useRef } from 'react'


const INITIAL_REGION = {

}

const Map = () => {
  const mapRef = useRef()

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  )
}

export default Map
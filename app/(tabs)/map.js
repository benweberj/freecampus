import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { useRef } from 'react'

const regions = {
  pullman: {
    latitude: 46.73286659997367,
    latitudeDelta: 0.05960214260632313,
    longitude: -117.16829476878046,
    longitudeDelta: 0.048933885991573334
  },

  ellensburg: {
    latitude: 47.003261549843614,
    latitudeDelta: 0.051178024319838755,
    longitude: -120.54155515506864,
    longitudeDelta: 0.04214722663162718
  }
}

const INITIAL_REGION = regions.pullman

const Map = () => {
  const mapRef = useRef()

  function focus(region) {
    console.log('Focusing on Pullman')
    mapRef.current.animateCamera({ center: region, zoom: 13 })
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        onRegionChangeComplete={r => console.log('Landed at the region:', r)}
        initialRegion={INITIAL_REGION}
      />

      <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
        <TouchableOpacity onPress={() => focus(regions.ellensburg)}>
          <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
            <Text>Ellensbug</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => focus(regions.pullman)}>
          <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
            <Text>Pullman</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Map
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);
    //console.log(currentLocation);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
    }

    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01, //it zooms a view of the map
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01, //it zooms a view of the map
            longitudeDelta: 0.01
        }}
    >
        <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor='rgba(158, 158, 255, 1.0)'
            fillColor='rgba(158, 158, 255, 0.3)'
        />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
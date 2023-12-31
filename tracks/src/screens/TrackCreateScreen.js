import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import { FontAwesome } from '@expo/vector-icons';

//FAKE LOCATION
import '../_mockLocation'


const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation
    } = useContext(LocationContext);

    const callback = useCallback(
        (location) => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);


    return <>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
        <Spacer>
            <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </>
}

const styles = StyleSheet.create({});

export default AccountScreen;
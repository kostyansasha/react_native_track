import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            //console.log(err.response.data)
            dispatch({ type: 'add_error', payload: 'Something wet wrong with sign up' });
        }
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false, errorMessage: '' }
);
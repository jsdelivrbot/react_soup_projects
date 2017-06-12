/**
 * Created by bkaratas on 11.06.2017.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}
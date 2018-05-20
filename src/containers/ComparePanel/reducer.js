/* global product - is it legal?*/

import {
    CHANGE_MEASURE_SYSTEM,
    SAVE_LOCALLY_MEASURE_SYSTEM,
} from '../../constants/actions';
import { UNITS } from '../../core/utils';
import { LOCAL_STORAGE_KEY } from '../../constants/properties';

const getDefaultMeasureSystem = () => {
    let measureSys = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!measureSys && !(measureSys in UNITS)) {
        measureSys = UNITS.in;
    }
    return measureSys;
};

const initialState = {
    product: product,
    measureSystem: getDefaultMeasureSystem()
};

export default function handle(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MEASURE_SYSTEM:
            return {
                ...state,
                measureSystem: action.payload
            };
        case SAVE_LOCALLY_MEASURE_SYSTEM:
            localStorage.setItem(LOCAL_STORAGE_KEY, state.measureSystem);
            return state;
        default:
            return state;
    }
}

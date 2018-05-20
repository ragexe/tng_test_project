/*global defaultMode, modes*/
import {
    ADD_ITEM,
    REMOVE_ITEM,
    SWITCH_ITEM
} from '../../constants/actions';
import { UNITS } from '../../core/utils';
import { LOCAL_STORAGE_KEY } from '../../constants/properties';

const getDefaultItem = () => [modes[defaultMode].items[0]];
const getDefaultMeasureSystem = () => {
    let measureSys = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!measureSys && !(measureSys in UNITS)) {
        measureSys = UNITS.in;
    }
    return measureSys;
};

const initialState = {
    modes: modes,
    currentMode: defaultMode,
    currentItems: getDefaultItem(),
    measureSystem: getDefaultMeasureSystem()
};

export default function handle(state = initialState, action) {
    switch (action.type) {
        case SWITCH_ITEM:
            return {
                ...state,
                currentItems: [action.payload.item],
                currentMode: action.payload.mode
            };
        case ADD_ITEM:
            return {
                ...state,
                currentItems: [...state.currentItems, action.payload]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                currentItems: state.currentItems.filter((item) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}

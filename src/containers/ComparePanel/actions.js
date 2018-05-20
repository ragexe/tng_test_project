import { CHANGE_MEASURE_SYSTEM, ROTATE_PRODUCT, SAVE_LOCALLY_MEASURE_SYSTEM } from '../../constants/actions';

export function rotateProduct(product) {
    return {
        type: ROTATE_PRODUCT
    };
}

export function changeMeasureSystem(type){
    return {
        type: CHANGE_MEASURE_SYSTEM,
        payload : type
    };
}

export function saveClientSideMeasureSystem(type) {
    return {
        type: SAVE_LOCALLY_MEASURE_SYSTEM,
        payload: type
    };
}

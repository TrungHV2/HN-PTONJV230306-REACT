import * as types from '../constants/action-type';

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case types.ACT_FETCH_PRODUCT:
            console.log('Lấy danh sách sản phẩm');
            console.log(action.payload);
            return [...action.payload];
        case types.ACT_POST_PRODUCT:
            console.log('Thêm mới sản phẩm');
            return state;
        default:
            return state;
    }
}
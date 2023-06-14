import * as types from '../util/ActionType'

export const carts = (state = [], action) => {
    switch (action.type) {
        case types.ADD_CART:
            console.log(action.payload);
            // Kiểm tra sp đã mua hay chưa
            // Mua rồi thì update số lượng
            // Chưa mua thì thêm mới
            return state;
        case types.REMOVE_CART:
            // Tìm
            // Xóa
            return state;
        case types.UPDATE_CART:
            // Tìm
            // Update số lượng
            return state;
        default:
            return state;
    }
}
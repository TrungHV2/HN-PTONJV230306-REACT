import * as types from '../constants/action-type';

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case types.CART_ADD:
            // Kiểm tra xem có sp đó chưa
            let cartItem = state.find(x => x.product.id === action.payload.id)
            if (cartItem) { // nếu có rồi
                //update số lượng
                cartItem.quantity += 1;
            } else {
                // Chưa có thì thêm mới
                state.push({
                    product: action.payload,
                    quantity: 1
                })
            }
            console.log(state);
            return [...state];
        default:
            return state;
    }
}
const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload;
            const check = state.products.find((pr) => pr.id === product.id);
            if (check) {
                return state;
            } else {
                const Tprice = state.totalPrice + product.price * quantity;
                const Tquantity = state.totalQuantities + quantity;
                product.quantity = quantity;

                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: Tprice,
                    totalQuantities: Tquantity,
                };
            }

        case 'DELETE_PRODUCT':

        default:
            return state;
    }
};

export default CartReducer;

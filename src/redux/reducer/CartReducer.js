const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quatity } = action.payload;
            const check = state.products.find((pr) => pr.id === product.id);
            if (check) {
                return state;
            } else {
                const Tprice = state.totalPrice + product.price * quatity;
                const Tquatity = state.totalQuantities + quatity;

                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: Tprice,
                    totalQuantities: Tquatity,
                };
            }
        default:
            return state;
    }
};

export default CartReducer;

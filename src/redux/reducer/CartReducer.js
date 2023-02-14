const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload;
            const checkedProduct = state.products.find((pr) => pr.id === product.id);
            const indexProduct = state.products.indexOf((pr) => pr.id === product.id);

            if (checkedProduct) {
                checkedProduct.quantity += 1;
                state.products[indexProduct] = checkedProduct; //thay thế
                return {
                    ...state,
                    totalPrice: state.totalPrice + checkedProduct.price * checkedProduct.quantity,
                    totalQuantities: state.totalQuantities + 1,
                };
            } else {
                product.quantity = quantity;
                let Tprice = state.totalPrice + product.price * quantity;
                let Tquantity = state.totalQuantities + quantity;
                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: Tprice,
                    totalQuantities: Tquantity,
                };
            }

        case 'INCREASE':
            findPro = state.products.find((pr) => pr.id === action.payload);
            index = state.products.findIndex((pr) => pr.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price,
                totalQuantities: state.totalQuantities + 1,
            };

        case 'DECREASE':
            findPro = state.products.find((pr) => pr.id === action.payload);
            index = state.products.findIndex((pr) => pr.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice + findPro.price,
                    totalQuantities: state.totalQuantities - 1,
                };
            } else {
                return state;
            }

        case 'DELETE':
            findPro = state.products.find((pr) => pr.id === action.payload);
            const filter = state.products.filter((pr) => pr.id !== action.payload);
            return {
                ...state,
                products: filter,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                totalQuantities: state.totalQuantities - findPro.quantity,
            };

        default:
            return state;
    }
};

export default CartReducer;

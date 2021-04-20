const state = {
    cartItemList:[],
	cart_value : 0
}
const mutations = {
    'UPDATE_CART' (state, {keysProduct,
                            product_name,
                            product_image,
                            product_unit_price,
							product_detail,
							sellerUid,
							status,
							seller_name_shop,
							quantity, 
							isAdd}) {
		// const item = JSON.parse(localStorage.getItem("cartItem") || "[]");
		// const record1 = item.find(element => element.keysProduct === keysProduct);

		const record = state.cartItemList.find(element => element.keysProduct === keysProduct);
		if (record) {
			if (isAdd) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		} else {
			const cartItemList = {
				keysProduct,
                product_name,
                product_image,
                product_unit_price,
				product_detail,
				sellerUid,
				status,
				seller_name_shop,
				quantity
			}
			//get
			const item = JSON.parse(localStorage.getItem("cartItem") || "[]");
			item.push(cartItemList)
			localStorage.setItem("cartItem",JSON.stringify(item))
			state.cartItemList.push({
                keysProduct,
                product_name,
                product_image,
                product_unit_price,
				product_detail,
				sellerUid,
				status,
				seller_name_shop,
				quantity
			});
		}
	},	
	'ADD_QUANTITY' (state,{keysProduct}){
		const record = state.cartItemList.find(element => element.keysProduct === keysProduct);
		if(record){
			record.quantity++
		}
	},
	'MINI_QUANTITY' (state,{keysProduct}){
		const record = state.cartItemList.find(element => element.keysProduct === keysProduct);
		if(record){
			record.quantity--
		}
	},

    'SET_CART' (state, productList) {
		if (productList) {
			state.cartItemList = productList;
		}
	},
	'REMOVE_CART_ITEM' (state, {
                                keysProduct,
                                }) {
		const record = state.cartItemList.find(element => element.keysProduct == keysProduct);
		state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
	},
	'SET_CART_VALUE' ( state , data){
		state.cart_value = data
	}

}

const actions = {
	clearCart: ({commit}) => {
		commit('SET_CART', []);
	}
}

const getters = {
	cartItemList: (state) => {
		return state.cartItemList;
	},
	cartValue: (state) => {
		return state.cart_value;
	}
}

export default {
	state,
    mutations,
    actions,
    getters
}
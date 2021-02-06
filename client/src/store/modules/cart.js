const state = {
    cartItemList:[]
}
const mutations = {
    'UPDATE_CART' (state, {keysProduct,
                            product_name,
                            product_image,
                            product_unit_price,
							product_detail,
							sellerUid,
							status,
							quantity, 
							isAdd}) {
		const record = state.cartItemList.find(element => element.keysProduct === keysProduct);
		if (record) {
			if (isAdd) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		} else {
			state.cartItemList.push({
                keysProduct,
                product_name,
                product_image,
                product_unit_price,
				product_detail,
				sellerUid,
				status,
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
		let res = 0;
		state.cartItemList.map(item => {
			res += item.product_unit_price * item.quantity;
		});
		return res;
	}
}

export default {
	state,
    mutations,
    actions,
    getters
}
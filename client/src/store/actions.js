export const updateCart = ({commit},{
                                    keysProduct,
                                    product_name,
                                    product_image,
                                    product_unit_price,
                                    product_detail,
                                    sellerUid,
                                    status,
                                    seller_name_shop,
                                    quantity, isAdd}) => {
    commit('UPDATE_CART', {keysProduct,
                            product_name,
                            product_image,
                            product_unit_price,
                            product_detail,
                            sellerUid,
                            status,
                            seller_name_shop,
                            quantity, isAdd});
    if(isAdd) {
        let message_obj = {
            message : `Add ${product_name} to cart successfully`,
            messageClass: "success",
            autoClose: true
        }
        commit('ADD_MESSAGE', message_obj);
    }
}

export const addQuantityStore = ({commit},{keysProduct}) => {
    commit('ADD_QUANTITY', {keysProduct});
}

export const miniQuantityStore = ({commit},{keysProduct}) =>{
    commit('MINI_QUANTITY',{keysProduct});
}

export const removeItemInCart = ({commit}, {
    keysProduct,
                                            }) => {
	commit('REMOVE_CART_ITEM', {
        keysProduct,
                                });
}

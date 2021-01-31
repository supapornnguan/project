export const updateCart = ({commit},{
                                    keysProduct,
                                    product_name,
                                    product_image,
                                    product_unit_price,
                                    product_detail,
                                     quantity, isAdd}) => {
    commit('UPDATE_CART', {keysProduct,
                            product_name,
                            product_image,
                            product_unit_price,
                            product_detail,
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

export const removeItemInCart = ({commit}, {
                                            product_name,
                                            }) => {
	commit('REMOVE_CART_ITEM', {
                                product_name,
                                });
}

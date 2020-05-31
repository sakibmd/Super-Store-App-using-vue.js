export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    getters: {
        getInventory(state) {
            return state.inventory;
        },
        getCart(state) {
            return state.cart;
        }
    },
    mutations: {
        setInventory(state, payload) {
            state.inventory = payload;
        },
        addToCart(state, payload) {
            state.cart.push(payload);
        },
        removeItem(state, payload) {
            state.cart.splice(payload, 1)
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        addToCart({ commit }, payload) {
            setTimeout(() => {
                commit('addToCart', payload)
            }, 1000)
        },
        setInventory({ commit }, payload) {
            commit('setInventory', payload);
        }
    }
}
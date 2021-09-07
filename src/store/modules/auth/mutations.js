export default {
    setUser(state, payload) {
        state.token = payload.token;
        console.log("Token: " + payload.token)
    },
    mgu_logout(state){
        state.token = null;
    },
};
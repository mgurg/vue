export default {
    getToken(state) {
        return state.token;
    },
    isAuthenticated(state){
        return !!state.token;
    }
};
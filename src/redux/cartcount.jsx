const cartCount=((state=0,action)=>{
    switch (action.type) {
                case "CART_COUNT":
                return state+1;
                break;
                case "REMOVE_COUNT":
                    console.log(state);
                return state--;
            
                break;
        default:
            return state;
            break;
    }
})
export default cartCount;
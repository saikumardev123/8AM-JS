export default function (state = [], action) {
    console.log("I am in products reducer");
    switch (action.type) {
        case 'GET_PRODUCTS': return action.payload.data;
        default: return state;

    }
}
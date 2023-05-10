export default function (state = [], action) {
    console.log(action);

    switch (action.type) {
        case 'STORE_WEATHER': return action.payload.data;
        default: return state;
    }
}
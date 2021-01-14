import { FETCH_USERS, NEW_USER, EDIT_USER, FETCH_SINGLE_USERS, DELETE_USER } from '../actions/types'

const initialState = {
    items: []
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload
        }
        case NEW_USER:
            return {
                ...state,
                items: [action.payload, ...state.items]
        }
        case FETCH_SINGLE_USERS:
            return {
                ...state,
                items: [...state.items, action.payload]
        }
        case EDIT_USER:
            const user = state.items.find(user => user.id == action.payload.id);
            let items = state.items;

            if(user){
                items = state.items.map(user => user.id == action.payload.id ? {...user, ...action.payload} : user)
            }else{
                items = [...state.items, action.payload];
            }
            
            return {
                ...state,
                items
        } 
        case DELETE_USER:
            const check_user = state.items.find(user => user.id == action.payload.id);
            let list_items = state.items;

            if(check_user){
                list_items = state.items.filter(obj => obj.id !== action.payload.id)
            }else{
                list_items = [...state.items, action.payload];
            }

            return {
                ...state,
                items : list_items
        }        
        default:
            return state;
    }
}
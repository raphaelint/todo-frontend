import { FETCH_TODOS, FETCH_TODOS_BY_USERID, NEW_TODO, EDIT_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
    items: [],
}

export default function todo(state = initialState, action) {
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                items: action.payload
            }  
        case FETCH_TODOS_BY_USERID:
            return {
                ...state,
                items: action.payload
            }
        case NEW_TODO:
            const new_todo = state.items.find(todo => todo.id === action.payload.id);

            if (!new_todo) {
                const data = [action.payload, ...state.items];

            return {
                ...state,
                items: data
            }
        }
        case EDIT_TODO:
            const todo = state.items.find(todo => todo.id == action.payload.id);
            let items = state.items;
            
            if(todo){
                items = state.items.map(todo => todo.id == action.payload.id ? {...todo, ...action.payload} : todo)
            }else{
                items = [...state.items, action.payload];
            }

            return {
                ...state,
                items: items
        }
        case DELETE_TODO:
            const check_todo = state.items.find(todo => todo.id == action.payload.id);
            let list_items = state.items;

            if(check_todo){
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
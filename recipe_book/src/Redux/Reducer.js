const initialData = {
  data: [],
};

export default function Reducer(state = initialData,action) {
    switch (action.type) {
        case "USER": {
            return {
                data:[...state.data,action.payload]
            }
        }
        default:{
            return state;
            }
    }
    
}

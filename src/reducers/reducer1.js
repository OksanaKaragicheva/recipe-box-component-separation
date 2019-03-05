//import { INDEX_TO_DELETE } from '../actions/indexToDelete';
const initialState = [
  {index: 0}
];
export const reducer1 = (state = initialState, action) => {
  switch(action.type) {
    case 'INDEX_TO_DELETE': return 1;
    default: return state
  }
}

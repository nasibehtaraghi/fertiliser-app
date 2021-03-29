import { createContext, useReducer } from 'react'
import { data } from './data'


const initialState = { showid: -1, data };
const DataContext = createContext(initialState);
const { Provider } = DataContext;

const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
        let newState = { ...state }
        let updatedItem = []
        switch (action.type) {
            case '_expand':
                updatedItem = newState.data.mols[action.expandId]
                updatedItem = { ...updatedItem, expand: !updatedItem.expand }
                let updatedMole = [...newState.data.mols]
                updatedMole[action.expandId] = updatedItem
                newState = { ...newState, data: { ...state.data, mols: updatedMole } }
                return newState

            case '_detail':

                newState = { ...newState, showid: action.productId }
                return newState;

            case '_back':

                newState = { ...newState, showid: -1 }
                return newState;

            default:
                throw new Error();
        };
    }, initialState);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { DataContext, DataProvider }


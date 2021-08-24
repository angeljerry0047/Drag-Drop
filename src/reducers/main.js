import * as MAIN from "../actions/actiontypes/main";
let saveUser = {
    username: '',
    password: '',
    items: [
        // {id: 'Component1', type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false},
        // {id: 'Component2', type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false},
        // {id: 'Component3', type: 'component', value: 'Component3', x: 2, y: Infinity, w: 1, h: 2, add: false},
        [
            { id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false },
        ],
        [
            { id: Math.random(), type: 'component', value: 'Component1', x: 0, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component2', x: 1, y: Infinity, w: 1, h: 2, add: false },
            { id: Math.random(), type: 'component', value: 'Component9', x: 2, y: Infinity, w: 1, h: 2, add: false },
        ],
    ],
    tabs: [
        { id: Math.random(), name: 'Tab1' },
        { id: Math.random(), name: 'Tab2' },
    ],
    userrole: 'Admin',
};
export default function reducer(state = saveUser, action = {}) {
    switch (action.type) {
        case MAIN.SAVE_USER:
            Object.assign(state, action.data)
            break;
        default:
            break;
    }
    return state;
}
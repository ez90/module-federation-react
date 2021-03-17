import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fakeStore} from './fakeMainStore';
import createStore from '../createStore';
import { setBackground } from '../actions';


const Component1 = () => {
    const dispatch = useDispatch();

    const style = useSelector((state) => state?.style);
    console.log('style', style);


    const [newName, setNewName] = useState('');

    return (
        <>
            <div>
                The color from local store : {style?.background}
            </div>
            <input
                style={{marginRight: '10px'}}
                type="text"
                onChange={(e) => {
                    setNewName(e.target.value);
                }}
            />
            <button onClick={() => dispatch(setBackground(newName))}>
                Set new background color
            </button>
        </>
    )
}

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user);
    console.log('user', user);
    const store = createStore();
    const [newName, setNewName] = useState('');

    return (
        <Provider store={store}>
            <div style={{marginTop: '10px'}}>
                <h1>App 2</h1>
                <div>
                    User name from the redux store : {user?.name}
                </div>

                <div>
                    <input
                        style={{marginRight: '10px'}}
                        type="text"
                        onChange={(e) => {
                            setNewName(e.target.value);
                        }}
                    />
                    <button onClick={() => dispatch({
                        type: 'SET_NAME',
                        name: newName,
                    })}>
                        Set new user name
                    </button>
                </div>
                <Component1 />
            </div>
        </Provider>
    );
};

const AppWrapper = (props) => {
    let {store} = props;

    // if (store === undefined) {
    //     console.log('no store in props, app is in standalone mode');
    //     store = localStore;
    // }

    // useEffect(() => {
    //     store.injectReducer(remoteAppScope, reducer);
    // }, []);

    console.log('eeee')

    return (
        <Provider store={store || fakeStore}>
            <App/>
        </Provider>
    );
};

export default AppWrapper;

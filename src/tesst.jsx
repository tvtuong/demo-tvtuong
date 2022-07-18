import * as React from 'react';
import { ReduxFormContext } from 'redux-form';

function Cha() {

    const [name, setName] = React.useState('');    
    // useState: khai Board
    React.useEffect(()=> {
        // name change => trigger
    }, [name])

    React.useEffect(()=> {
        async function initView() {
            
            await apik 
            await api
            await a
            pi3
        }

        // event
        initView()
        // khơi tạo
        // 
        return () => {
            //
        }
    }, [])

    React.useEffect(()=> {
        //validate
        checkValidate();
    })

    function checkValidate() {

    }

    // useCoenxt = ReduxFormContext
    // scope


    // memo
    // usememo
    // useCallback
    // => performance => han che render

    // render:
    //  - to chuc logic
    //  - cach xay dung effect perfomerce

    // React.use
    function changeName(value) {
        setName(value)
    }

    return <Con name={name} clickAction={changeName}/>

}



function Con(props) {
    const [age, setAge] = React.useState(18);
    
    return (
        <div>
            {`con: ${props.name}`}
            <Con1 age={age} name={props.name} ten={props.clickAction}/>
        </div>
    )
}

function Con1(props) {
    function clickAction() {
        props.ten('ss')
    }

    return (
        <div>
            {`con: ${props.name}`}
            {`tuoi: ${props.age}`}
            <button onClick={clickAction}>clickAction</button>
        </div>
    )
}
import React, {  useState, useContext} from 'react';


const AppContext= React.createContext({
    state:{},
    actions:{}
})

const propTypes = {
};

const defaultProps = {
};


function AppProvider(props){


    const [translate, setTranslate] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(null);
    const [counter, setCounter] = useState(0);
    const [errorMessage,setErrorMessage]=useState(null);
    const [attributes, setAttributes] = useState({Entity: "", NTN: "", Country: "", City: "",
    Name: "", Contact: "", Mail: "", Password: "", FeeDetail: "", UserType: null})


    const state={
        translate,
        operation,
        result,
        result2,
        loading,
        filters,
        counter,
        errorMessage,
        attributes
    }
    const actions={
        setTranslate,
        setOperation,
        setResult,
        setResult2,
        setLoading,
        setFilters,
        setCounter,
        setErrorMessage,
        setAttributes
    }


    return (
        <AppContext.Provider value={{state,actions}}>
            {props.children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = propTypes;
AppProvider.defaultProps = defaultProps;

function useApp(props){
    return useContext(AppContext)
}

export {
    AppProvider,
    useApp,
}


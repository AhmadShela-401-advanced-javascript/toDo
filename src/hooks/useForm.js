// useState, useEffect: react built in Hooks
// starting with useMyHookName -> useForm
// dry: not repeatitive as much as possible: reusable functionality
import React, {useState} from 'react';
// generic form handler that will handle a set of fields for me
// No JSX no return for it;
const useForm = (callback) => {
    const [values, setValues] = useState({});
    const handleSubmit = (e) => {
        console.log("Generic submit Handler!!####### !! ")
        if (e) e.preventDefault();
        callback(values);
    }
    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
        console.log("Generic change Handler !! ", values)
    }
    return [handleSubmit, handleChange, values];
}
export default useForm;
import React from 'react';

import {useForm} from 'react-hook-form'
const NormalForm = () => {
    const {handleSubmit, register}=useForm()
    const onSubmit=(data)=>{
        console.log(data.name)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
           <label htmlFor='name'>Name</label>
            <input type='text' id="name" {...register("name")}></input>
           </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default NormalForm;
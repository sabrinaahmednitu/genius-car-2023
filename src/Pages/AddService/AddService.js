import React from 'react';
import { useForm } from "react-hook-form"


const AddService = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
    return (
      <div className="container">
      
          <h2 className='text-center mt-5' >Add new service here</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex justify-content-center align-items-center flex-column mt-5"
          >
            <input
              {...register('firstName', { required: true, maxLength: 20 })}
            />
            <br />
            <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
            <br />
            <input type="number" {...register('age', { min: 18, max: 99 })} />
            <br />
            <input type="submit" />
          </form>
      
      </div>
    );
};

export default AddService;
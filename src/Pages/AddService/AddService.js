import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
        .then(result=>console.log(result))
    };
    



  return (
    <div className='container' >
      <h2 className="text-center mt-5">Add new service here</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-50 mx-auto mt-5 gap-4"
      >
        <input
          placeholder="name"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <textarea placeholder="description" {...register('description')} />
        <input placeholder="price" type="number" {...register('price')} />
        <input placeholder="Photo URL" type="text" {...register('img')} />
        <input className="btn btn-secondary" type="submit" ></input>
      </form>
    </div>
  );
};

export default AddService;

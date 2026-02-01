import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUserData = () => {
    const user=useLoaderData()
    console.log(user)
   
    // handle form
    const handleUpdate = (e) =>{
        e.preventDefault()
        const name=e.target.name.value ;
        const email=e.target.email.value;
        console.log(name,email);
      const updateUser={name,email}
        // send Update Data server
fetch(`http://localhost:3000/users/${user._id}`,{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updateUser)
})
.then(res=>res.json())
.then(data =>console.log(data))

    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className=' font-bold  text-3xl '>Update the user data</h1>

            <form onSubmit={handleUpdate} >
            <input type="text" name='name' defaultValue={user.name}  className="input input-secondary" />
            <input type="text" name='email' defaultValue={user.email}  className="input input-secondary mt-3.5" />
            <br />
            <button className='btn bg-purple-700 mt-5 ml-6'>Update</button>
</form>
        </div>
    );
};

export default UpdateUserData;
// import React, { use } from 'react';

const Card = ({user, onDelete}) => {
    const {name,email,imgUrl,_id }=user
    // console.log(user)
    return (


          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6">
      <div className="flex flex-col items-center">
        <img 
          className="w-24 h-24 rounded-full object-cover mb-4" 
          src={imgUrl} 
          alt={name}
        />
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{email}</p>
        <button 
         onClick={() =>{onDelete(_id)} }
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>

    );
};

export default Card;
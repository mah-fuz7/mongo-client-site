import { use, useState } from 'react';
import Card from './Card';

const PlayerCard = ({ userPromise}) => {
 const userinfo=use(userPromise)
//  console.log(userinfo)
    const [userData,setUserData]=useState(userinfo)

    const handleUser = (e) =>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const imgUrl=e.target.imgURL.value;
    console.log('form submit',name,email,imgUrl )
    const newUser={name,email,imgUrl}

     // save this user data to the database (via server)
    
    fetch('http://localhost:3000/users',{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data => {
        newUser._id=data.insertedId
        const finalUserData=[...userData,newUser]
        setUserData(finalUserData)
        console.log("user data",data)
       e.target.reset()
    })
    }
//    DELETE user
const handleDeleteUser =(id) =>{
console.log(id)
fetch(`http://localhost:3000/users/${id}`, {
    method:'DELETE'
})
.then(res=>res.json())
.then(data => {
    if(data.deletedCount){
        const remainingUser=userData.filter(user => user._id !==id)
        setUserData(remainingUser)
    }
}
   
)
}

    return (
        <div >
            <div  className='mb-15 flex'>
            <form onSubmit={handleUser}>
               
          
                <br />
                <input type="text" placeholder="Enter Your name" className="input input-primary mt-5" name='name' />
                      
                            

                <input type="text" placeholder="Enter Your Email" className="input input-primary mt-5" name='email' />
                             

                <input type="link" placeholder="Enter Your img URL" className="input input-primary mt-5" name='imgURL' />
                <br />
<button type='submit' className='btn btn-primary bg-blue-600 mt-5'> submit</button>
            </form>
</div>
            {/* player card */}
            <div className='flex flex-wrap gap-4 my-5 mx-5'>
{
    userData.map(user => <Card user={user} onDelete={handleDeleteUser}></Card>)
}
</div>

        </div>
    );
};

export default PlayerCard;
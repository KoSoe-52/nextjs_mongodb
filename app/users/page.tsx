import React from 'react'
interface User{
  id:number;
  name:string;
  email:string;
};
const UserPage = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:'no-store'
      });
     const users:User[] = await response.json();
  return (
    <div>
       <h1>Posts</h1>
       <p>{new Date().toLocaleTimeString()}</p>
       <button className='btn btn-primary'>Add to Cart</button>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
             return ( <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default UserPage


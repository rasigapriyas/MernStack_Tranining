import React from 'react'
import Child from './Child';

const ParentComponent = () => {
    const getData=(data)=>{
        console.log(`Data Recieved from child: `,data);
    }
  return (
    <div>
        <Child send={getData}></Child>
    </div>
  )
}

export default ParentComponent

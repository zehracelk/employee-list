import { useState } from 'react';
import './App.css';
import Employee from './componenets/employee';
import {data} from './helper/data';

function App() {

  const [person,setPerson] = useState(0);
  
  const next =()=>{
   (person + 5) >= data.length ? setPerson(0) : setPerson(person + 5);
    console.log(typeof person);
    console.log(person);
    
 };

 console.log(person);

  const back =()=>{
  person < 1 ? setPerson(15) : setPerson(person - 5);
  console.log(person);
  
 }

  
 
  return (
    <div className="container">

      <h2>Employee List</h2>
      <h3>(Employees )</h3>
      
      <Employee name={data[person].name} age={data[person].age} email={data[person].email} image={data[person].image} />
      <Employee name={data[person + 1].name} age={data[person+1].age} email={data[person+1].email} image={data[person+1].image} />
      <Employee name={data[person + 2].name} age={data[person+2].age} email={data[person+2].email} image={data[person+2].image} />
      <Employee name={data[person + 3].name} age={data[person+3].age} email={data[person+3].email} image={data[person+3].image} />
      <Employee name={data[person + 4].name} age={data[person+4].age} email={data[person+4].email} image={data[person+4].image}/>

     
      <button onClick={back} >Prev</button>
      <button onClick={next} >Next</button>


    </div>
  );
}


export default App;

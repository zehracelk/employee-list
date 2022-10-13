
import '../helper/data.css'

const Employee = (data) => {

    const{name,age,image,email} = data;

  return (
    <div className="card">
    <div className="img"><img src={image} alt="" /></div>

    <div className="section">
    <div className="name">{name}</div>
    <div className="mail">{email}</div>
    <div className="age">{age} years</div>
   
    </div>


    </div>
  )
}

export default Employee;

import react, { useEffect , useState} from "react";
import axios from "axios";

export default function StudentsApp(){

const [students, setstudents] = useState([])
const [student, setstudent] = useState()
const [editStudentForm, seteditStudentForm]= useState(false)
const [createStudentForm, setcreateStudentForm] = useState(false)
const [newStudent, setnewStudent] = useState(
    {
        id:"", name:"", age:"", grade:""
    }
)


}

useEffect(()=>{
    axios.get("http://127.0.0.1:3003/students")
    .then(res=>setstudents(res.data))
    .catch(err=>(console.log("err")))
},[])

// Updating Student Data 

function editstudentDetails(StudentInfo)
{
console.log("Editing Student:", StudentInfo)
setstudent(StudentInfo)
seteditStudentForm(true)
}
console.log(student)

function updateRecord(e){
  e.preventDefault()
  axios
  .put(`http://127.0.0.1:3003/students/${student.id}`, newStudent)
  .then(res=>{
    alert("Record Updated")
    seteditStudentForm(false)
    window.location.reload()
  })
  .catch(err=>console.log(err))
}


function deleteStudent(StudentInfo){
    if(window.confirm("Are you sure to delete the record?")) 
    axios
    .delete(`http://127.0.0.1:3003/students/${StudentInfo.id}`)
    .then(res=>alert("Record Deleted Successfully"))
    .catch(err=>console.log(err))
  
    window.location.reload()
  
  }
  
  function createStudentForm(){
  setshowCreateForm(true)
  }
  
  function CreateNewStudent(){
    axios
    .post(`http://127.0.0.1:3003/students/`, newStudent)
    .then(res=>alert("New Student Created"))
    .catch(err=>console.log(err))
  
    window.location.reload()
  
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
            <h2 className='text-center bg-primary text-white py-2'>List of Students</h2>
        </div>
      </div>

<button className='btn btn-primary' onClick={createStudentForm} >Add New Student</button>

{createStudentForm?
<form>
  <label htmlFor=''>ID</label>
  <input type='text' className='form-control'
  onChange={(e)=>setnewStudent({...newStudent, id:e.target.value})}
  />
  <label htmlFor=''>Name</label>
  <input type='text' className='form-control'
  onChange={(e)=>setnewStudent({...newPost, name:e.target.value})}
  />
  <label htmlFor=''>Age</label>
  <input type='text' className='form-control'
  onChange={(e)=>setnewStudent({...newPost, age:e.target.value})}
  />
  <label htmlFor=''>Grade</label>
  <input type='text' className='form-control'
  onChange={(e)=>setnewStudent({...newPost, grade:e.target.value})}
  />
  <button type='button' className='btn btn-primary my-2' onClick={CreateNewStudent} >Create Record</button>
</form>:null}


<form>
  <label htmlFor=''>ID</label>
  <input type='text' defaultValue={students.id} className='form-control'
  onChange={(e)=>setnewPost({...newStudent, id:e.target.value})}
  />
  <label htmlFor=''>Name</label>
  <input type='text' defaultValue={students.name} className='form-control'
  onChange={(e)=>setnewPost({...newStudent, name:e.target.value})}
  />
  <label htmlFor=''>Age</label>
  <input type='text' defaultValue={students.age} className='form-control'
  onChange={(e)=>setnewPost({...newStudent, age:e.target.value})}
  />
  <label htmlFor=''>Grade</label>
  <input type='text' defaultValue={students.grade} className='form-control'
  onChange={(e)=>setnewPost({...newStudent, grade:e.target.value})}
  />
  <button className='btn btn-primary my-2' onClick={updateRecord} >Update record</button>
</form>

:<table className="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
    <th scope="col">Grade</th>
    <th scope="col" colSpan={2} className='text-center'>Action</th>
  </tr>
</thead>
<tbody>
  {
    posts &&
    posts.map((post)=>(
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.name}</td>
        <td>{post.age}</td>
        <td>{post.grade}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={()=>editstudentDetails(student)}> Edit </button>
        </td>
        <td>
          <button className="btn btn-success btn-sm" onClick={()=>deletestudent(student)}> Delete </button>
        </td>
      </tr>
    ))
  }
</tbody>
</table> }


</>
)











}

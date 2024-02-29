import './students.css'

function Studentlist()
{
 // Object
 let deptObj = {  sid: 10, sname: "Accounts", cource: "React", age: "24", total: "3444" };
    return(
      <>
       <table  border="2"  width="500">
        <tr style={{textAlign: "center"}}><b>Student Details</b></tr>
        <tr>
          <td style={{color:"white", background: "red"}}> Student id  :</td>
          <th> {deptObj.sid}</th>
        </tr>
        <tr>
          <td> Student Name  :</td>
          <th> {deptObj.sname}</th>
        </tr>
        <tr>
          <td> Student cource  :</td>
          <th> {deptObj.cource}</th>
        </tr>
        <tr>
          <td> Student age  :</td>
          <th> {deptObj.age}</th>
        </tr>
        <tr>
          <td> Student total  :</td>
          <th> {deptObj.total}</th>
        </tr>
     </table>
      </>
    );
}

export default Studentlist;
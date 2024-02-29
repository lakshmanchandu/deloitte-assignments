function Doctorlist()
{
     // Array of Objects
   let doctorArray = [
    { docid: 10, dname: "lakshmanchandu", cource: "Hyd", experienc: "12", contact: "9192192919" },
  ];

  
   let resultArray2 =  doctorArray.map(item => 
    {
      return <tr>
              <td>{item.docid}</td>
              <td>{item.dname}</td>
              <td>{item.cource}</td>
              <td>{item.experienc}</td>
              <td>{item.contact}</td>
            </tr>;
    });

    return (
      <>
       <table  border="2"  width="700">
     <tr>
          <th>Doctor ID</th>
          <th>Doctor Name</th>
          <th>Designation</th>
          <th>Experience (Years)</th>
          <th>Contact Number</th>
        </tr>
        
      {resultArray2}
      </table>
      </>
    );
}

export default Doctorlist;
import './cards.css'

function  Cards()
{

    let  uesrsArray =  [
        {"doctorid":12324,"designation":"Designer","first_name":"Lakhman","last_name":"Bluth","doctorimage":"https://reqres.in/img/faces/1-image.jpg","link":"book appointment", "star":"2",},
        {"doctorid":234534,"designation":"Developer","first_name":"Mohan","last_name":"Weaver","doctorimage":"https://reqres.in/img/faces/2-image.jpg","link":"book appointment",},
        {"doctorid":345234,"designation":"Front end","first_name":"Ravi sai","last_name":"Wong","doctorimage":"https://reqres.in/img/faces/3-image.jpg","link":"book appointment",},
        {"doctorid":43213,"designation":"UI UX ","first_name":"Venkat","last_name":"Holt","doctorimage":"https://reqres.in/img/faces/4-image.jpg","link":"book appointment",},
        {"doctorid":51232,"designation":"BSA & QA","first_name":"Charles","last_name":"Morris","doctorimage":"https://reqres.in/img/faces/5-image.jpg","link":"book appointment",},
        {"doctorid":612321,"designation":"SR Manager","first_name":"Cherry","last_name":"Ramos","doctorimage":"https://reqres.in/img/faces/6-image.jpg","link":"book appointment",},
        {"doctorid":712321,"designation":"Front end","first_name":"Ella","last_name":"Wong","doctorimage":"https://reqres.in/img/faces/3-image.jpg","link":"book appointment",},
        {"doctorid":812312,"designation":"UI UX ","first_name":"Eve","last_name":"Holt","doctorimage":"https://reqres.in/img/faces/4-image.jpg","link":"book appointment",},
    ];


        let  resultsArray = uesrsArray.map((item, index) => 
        {
            return <div  className='card' key={index}> 
                        <img src={item.doctorimage}   /> <br/>
                        <span className='username'>{item.first_name + " " + item.last_name}</span>  <br/>
                        <span>{item.doctorid}</span>  <br/>  
                        <span className="email">{item.designation}</span>  <br/>
                        <img src='./images/star.png' className='rating'></img>
                        <button>{item.link}</button>
                    </div>;
        });


    return (
        <>
			 <h3 style={  {color:"red", marginBottom:"60px", textAlign:"center", fontSize: "2rem"}  }>Assignment Reference image</h3>

           <div className='cardshost'>
            {resultsArray}    
            </div>
            
        </>
    );
}

export default Cards;
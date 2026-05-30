import axios from "axios";
import { useState } from "react";

function App() {

  const [data, setdata] = useState([])
 async function getData(){

  const apidata = await axios.get("https://picsum.photos/v2/list");

 setdata(apidata.data);
 

    
   
  }
  
  return (
    <div>
     
      <button onClick={getData}>click me</button>

      <div>
        {data.map(function (elem,idx){
          return <h3>{idx},{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App



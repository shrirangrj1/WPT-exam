import "./App.css";
import axios from "axios";

function App() {
  return (<div>
    <Mycomponent/>
  </div>);
}
function Mycomponent() {
   const getUser = async () => {
    const url = "http://localhost:4000/Users";
    const result =await axios.get(url);
  };
  return (
    <div >
      <h2> My Chat App </h2> By Shrirang Joshi 113
      
    <div>
        <input size={80} width={50}
          type="text"
          placeholder="Enter meassage"/>
          <input type="button" value="SEND"/>
 </div>
 
 <div>
 <input size={80}
          type="text"
          value="hi"/>
 </div>
 <div>
 <input size={80}
          type="text"
          value="hello,"/>
 </div>
 <div>
 <input size={80}
          type="text"
          value="Whts app,"/>
 </div>
 <div>
 <input size={80}
          type="text"
          value="All good,"/>
 </div>
 <div>
 <input size={80}
          type="text"
          value="All the best"/>
 </div>
 </div>

      );
}

export default App;

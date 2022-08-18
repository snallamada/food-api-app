import React, {useState } from 'react'
import Products from './Products'
// backend data pulling

const App = () => {
 const  [search,setSearch] = useState('');
 const [data,setData] = useState([]);
const YOUR_APP_ID = "4ce54134";
const YOUR_APP_KEY = "c47aa1c2d338515239ef0cf08c7599a9";

 const submitHandler = e =>{
  e.preventDefault();

  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(response => response.json()).then(data=>setData(data.hits))
}
  return (
    
    
    // front-end code
    <div>
      <center>
      <h1 style={{fontSize:60,padding:20,}}>Search Your Favoraite Food</h1>

<form onSubmit={submitHandler}>
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br></br><br></br>
  <input type="submit" className='btn btn-primary' value="Submit" />
</form>
<br></br>
{/* content display */}

{data.length >= 1 ? <Products data={data}/>:null}

</center></div>
  )
}

export default App

import React, { useState } from "react";
import "./App.css"
import { MdToggleOff , MdToggleOn} from "react-icons/md";


const Calculator=()=>{
  const [value,setvalue]=useState('');
  const [result, setresult]=useState('');
  const [theme , setTheme] = useState("dark")

  const toggleTheme = () =>{
    setTheme((prev)=> (prev === "dark" ? "light" : "dark"))
  }

  return(
    <>
      <div className="maincontainer">
        <button onClick={toggleTheme}>
          {theme === "dark" ? (<MdToggleOn />
): (<MdToggleOff />
)}
        </button>
        <div className={`calculator ${theme == 'dark' ? 'light' : 'dark' }`}>
          <form action="">
            <div className="textshow">
              <input type="text" value={value}/>
              <input type="text" value={result}/>
            </div>
            <div className="btnContainer">
              <div>
                <div className="scientific">
                <input type="button" value={'e'} />
                <input type="button" value={'u'} />
                <input type="button" value={'sin'} />
                <input type="button" value={'^'} />
              </div>
              </div>
              <div className="numbers">
               <div className="num1">
                <input type="button" value={'Ac'} onClick={e=>{setvalue('');setresult('')}}/>
                <input type="button" value={'7'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'4'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'1'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'0'} onClick={e=>setvalue(value+e.target.value)}/>
              </div>
               <div className="num2">
                <input type="button" value={'x'} onClick={e=>setvalue(value.slice(0,-1))}/>
                <input type="button" value={'8'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'5'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'2'} onClick={e=>setvalue(value+e.target.value)}/>
              </div>
               <div className="num3">
                <input type="button" value={'/'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'9'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'6'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'3'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'.'} onClick={e=>setvalue(value+e.target.value)}/>
              </div>
               <div className="oprators">
                <input type="button" value={'*'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'-'} onClick={e=>setvalue(value+e.target.value)}/>
                <input type="button" value={'+'} className="sumbtn"onClick={e=>setvalue(value+e.target.value)}/>
                <input 
                type="button" 
                value={'='} 
                className="equalbtn" 
                onClick={e => {
                try {
                    setresult(eval(value));
                  } catch (error) {
                   setresult('Error');
                  }
                  }} 
/>

  

              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Calculator;









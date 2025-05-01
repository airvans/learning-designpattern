import Button from "./button";
import { useState,useRef } from "react";
import './App.css'




export function Layout(){

    const [value,setvalue] = useState('')
    const numbers = useRef([])
    const present = useRef('')

    function addtoinput(input){

        setvalue(value + input)
        
        if(/^[0-9]$/.test(input)){
          present.current =  present.current + input
        }
        
     }

     function specialinput(input){

        if(present.current !== ''){
          let holder = Number(present.current)
          numbers.current.push(holder)
        }
   
        numbers.current.push(input)
   
        present.current=''
        setvalue(()=>value + input)
     }

     function cleardisplay(){
        setvalue('')
        present.current = ''
        numbers.current = []
    }

    function getaresult(){

        if (present.current !== '') {
          numbers.current.push(present.current);
          present.current = '';
        }
      
        // Convert array to expression string
        const expression = numbers.current.join('');
        let result;
      
        try {
          // Use eval for simplicity; ensure input is controlled
          result = eval(expression);
          if (!isFinite(result)) result = 'Error';
        } catch (e) {
          result = 'Error';
        }
      
        setvalue(String(result))
         numbers.current = []
      
         if(result != 'Error'){
          present.current = String(result)
         }
      
    }
      
    

    return(<>
   <div className="container">
  <div className="display-row">
    <input type="text" value={value} className="textinput" readOnly />
    <Button number={'cls'} sethandler={cleardisplay} />
  </div>
  <div className="grid">
    {[1, 2, 3, '/',
      4, 5, 6, '*',
      7, 8, 9, '-',
      0, '.', '=', '+'
    ].map((item, idx) => (
      <Button
        key={idx}
        number={item}
        sethandler={['+', '-', '*', '/', '.', '='].includes(item)
          ? item === '='
            ? getaresult
            : specialinput
          : addtoinput}
      />
    ))}
  </div>
</div>

    </>)

}

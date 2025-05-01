import { useState,useRef } from 'react'
import './App.css'

function Button({number,sethandler}){

  return(<><button onClick={()=>sethandler(number)}>{number}</button></>)

}

function App() {

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
    setresult(0)
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


   //setresult(result)
   setvalue(String(result))
   numbers.current = []

   if(result != 'Error'){
    present.current = String(result)
   }

  }
//

  return (
    <>
    <input type="text" value={value} readOnly />
    <Button number={'1'} sethandler={addtoinput}/>
    <Button number={'2'} sethandler={addtoinput}/>
    <Button number={'3'} sethandler={addtoinput}/>
    <Button number={'4'} sethandler={addtoinput}/>
    <Button number={'5'} sethandler={addtoinput}/>
    <Button number={'6'} sethandler={addtoinput}/>
    <Button number={'7'} sethandler={addtoinput}/>
    <Button number={'8'} sethandler={addtoinput}/>
    <Button number={'9'} sethandler={addtoinput}/>
    <Button number={'0'} sethandler={addtoinput}/>
    <Button number={'+'} sethandler={specialinput}/>
    <Button number={'-'} sethandler={specialinput}/>
    <Button number={'*'} sethandler={specialinput}/>
    <Button number={'/'} sethandler={specialinput}/>
    <Button number={'='} sethandler={getaresult}/>
    <Button number={'cls'} sethandler={cleardisplay}/>
    </>
  )
}

export default App

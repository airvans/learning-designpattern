

export default function Button({number,sethandler}){

    return(<><button onClick={()=>sethandler(number)}>{number}</button></>)

}
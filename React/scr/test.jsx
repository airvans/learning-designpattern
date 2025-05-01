
let hello = {"hello":"man","hell":"nah"}

function Testing({name}){
    return(
     <div>
        <div>
            {hello + name}
        </div>
     </div>   
    )
}

function anotherone(){

    return(
    <div>
        <Testing />
        <div>
            <Testing name="hello"></Testing>
        </div>
    </div>
)
}
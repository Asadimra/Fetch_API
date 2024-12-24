const dynamic = async  (props:any)=>{
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`)
    const res = await url.json()
    console.log("single",res)
    return(
        <div>
            <h1>{`comments Id: ${res.id}`}</h1>
            <h1>{`comments author: ${res.name}`}</h1>
            <h1>{`comments Email: ${res.email}`}</h1>
            <h1>{`comments Body: ${res.body}`}</h1>


            </div>
    )
}
export default dynamic

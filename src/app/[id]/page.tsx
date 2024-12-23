const dynamicroutes = async  (props:any)=>{
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const res = await url.json()
    console.log("single",res)
    return(
        <div>
            <h1 className="">{`Users ID: ${res.id}`} </h1>
            <h1 className="">{`Users author: ${res.name}`} </h1>
            <h1 className="">{`Users Email: ${res.email}`} </h1>

            </div>
    )
}
export default dynamicroutes




const dynamic = async  (props:any)=>{
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.body}`)
    const res = await url.json()
    console.log("single",res)
    return(
        <div>
            <h1 className="">{`Comments ID: ${res.id}`} </h1>
            <h1 className="">{`comments author: ${res.name}`} </h1>
            <h1 className="">{`comments Email: ${res.email}`} </h1>
            <h1 className="">{`comments body: ${res.body}`} </h1>

            </div>
    )
}
export default dynamic



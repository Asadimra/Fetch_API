import Link from "next/link"
export default async function Comments(){
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const res = await url.json()
    return(
        <div>
            <h1 className="text-center">All Comments</h1>
           {res.map((cm:any)=>
        (
          <div  key={cm.id} >
            <Link href={`${cm.id}`}>
            <h1>{`comments author: ${cm.name}`}</h1>
            </Link>
          </div>
           ))}

        </div>
    )
}
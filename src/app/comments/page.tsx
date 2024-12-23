// https://jsonplaceholder.typicode.com/todos
import Link from "next/link";

export default async function comments() {
  const url = await fetch(" https://jsonplaceholder.typicode.com/comments")
  const res = await url.json()
  return (
   <div>
            <h1 className="text-center">ALL Comments</h1>

    {res.map((cm:any)=>(
      <div>
        <Link href={`${cm.id}`}>
        <h1 className="">{`comments author: ${cm.name}`} </h1>
        </Link>

      </div>
    ))}

   </div>
  );
}

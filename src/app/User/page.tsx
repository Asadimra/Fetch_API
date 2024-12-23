import Link from "next/link";

export default async function User() {
  const url = await fetch(" https://jsonplaceholder.typicode.com/users")
  const res = await url.json()
  return (
   <div>
            <h1 className="text-center">ALL Users</h1>

    {res.map((us:any)=>(
      <div>
        <Link href={`${us.id}`}>
        <h1 className="">{`User name: ${us.name}`} </h1>
        </Link>

      </div>
    ))}

   </div>
  );
}

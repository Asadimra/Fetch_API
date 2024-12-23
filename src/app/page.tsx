import Link from "next/link"
export default function Home(){
  return(
    <div>
      <ol>
        <Link href="/comments">
        <li>Comments</li></Link>
        <Link href="/User">
        <li>USERS</li></Link>
      </ol>
    </div>
  )
}
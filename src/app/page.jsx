import Link from "next/link";
	
export const dynamic = "force-static" 

export const metadata = {
  title: "Home",
  description: "Description",
};



export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href={"/henry"} prefetch={false}>Link to Henry</Link>
    </main>
  );
}

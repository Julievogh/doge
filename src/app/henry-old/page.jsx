import Image from "next/image";

async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  return await res.json();
}

export async function generateMetadata() {
  const data = await getHenry();
  const { name, age, favouriteColor } = data;

  return {
    title: data.name,
    description: `${name} is a ${favouriteColor} ${age} year old dog`,
  };
}

export default async function HenryPage() {
  const data = await getHenry();
  const { name, favouriteColor, age } = data;

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        alt="A cute dog"
        width={3024}
        height={4032}
        priority={true} // disables lazy load
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
      />
      <div>
        <h1 className="text-3xl">My name is {name}</h1>
        <p>
          My favorite color is <span className="text-yellow-400">{favouriteColor}</span>
        </p>

        <p>I am {age} years old. </p>
      </div>
    </main>
  );
}

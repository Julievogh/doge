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
    <main>
      <h1>{name}</h1>
      
      <p></p>
    </main>
  );
}

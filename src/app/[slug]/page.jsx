import { notFound } from "next/navigation";
import Image from "next/image";

import { getAllDogs, getDogBySlug } from "@/lib/api";
export async function generateStaticParams() {
  const pages = await getAllDogs();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getDogBySlug(slug);

  return {
    title: data.name,
    description: `here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  const { slug } = params;

  const oneDog = await getDogBySlug(slug);

  //No dog found
  //if (res.status !== 200) return notFound();

  // Dog found!

  //console.log(getDogBySlug(slug));

  const { name, favouriteColor, age, image } = oneDog;

  return (
    <main>
      <Image
        src={image.url}
        alt={image.name}
        width={image.width}
        height={image.height}
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
      />
      <div>
        <h1 className="text-3xl">My name is {name}</h1>

        {favouriteColor && (
          <p>
            My favorite color is <span color={favouriteColor}>{favouriteColor}</span>
          </p>
        )}

        <p>
          I am {age} {age == "1" ? "year" : "years"} old.{" "}
        </p>
      </div>
    </main>
  );
}

// henry, pete, tommi

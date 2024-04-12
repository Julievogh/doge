import { notFound } from "next/navigation";
import Image from "next/image";
export default async function DogPage({ params }) {
  const { postslug } = params;

  return (
    <main>
      <h1>Breaking: {postslug}</h1>
    </main>
  );
}

// henry, pete, tommi

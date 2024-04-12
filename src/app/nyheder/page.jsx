import { notFound } from "next/navigation";
import Image from "next/image";
export default async function DogPage({ params }) {
  return (
    <main>
      <h1>Vælg en kategopri</h1>
      <a href="/nyheder/indland">Indland</a>
      <a href="/nyheder/udland">Udland</a>
    </main>
  );
}

// henry, pete, tommi

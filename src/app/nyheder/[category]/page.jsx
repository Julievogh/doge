import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function DogPage({ params }) {
  const { category } = params;

  return (
    <main>
      <h1>Hej, læs alle vores nyheder om {category}</h1>
      <ul>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
        <li>
          <Link href={`/nyheder/${category}/taylor-spiser`} prefetch={false}>
            TS Spiser
          </Link>
        </li>
      </ul>
    </main>
  );
}

// henry, pete, tommi

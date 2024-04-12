const rootUrl = "https://nice-dogs.vercel.app/api/dogs";

export async function getAllDogs() {
  const res = await fetch(rootUrl);
  if (res.status !== 200)
    return {
      error: "Dogs ran away",
    };
  return await res.json();
}

export async function getDogBySlug(slug) {
  const res = await fetch(`${rootUrl}?slug=${slug}`);
  if (res.status !== 200)
    return {
      error: "Dog ran away",
    };
  return await res.json();
}

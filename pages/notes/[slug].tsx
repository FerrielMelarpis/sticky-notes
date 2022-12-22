import { useRouter } from "next/router";

// TODO: just a sample
export default function Note() {
  const router = useRouter();
  return (
    <>
      <h1 className="text-xl font-bold">{router.query.slug}</h1>
      <ul>
        <li className="underline">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </>
  );
}

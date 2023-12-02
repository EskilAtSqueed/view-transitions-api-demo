import { getCast } from "@/api/getCast";

type Props = { id: string };

export default async function Cast({ id }: Props) {
  const cast = await getCast(id);

  return (
    <div>
      {cast.map((person) => (
        <p key={person.character.id}>{person.character.name}</p>
      ))}
    </div>
  );
}

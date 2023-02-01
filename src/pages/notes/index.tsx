type NotesPageProps = {
  name: string;
};

export async function getServerSideProps(): Promise<{ props: NotesPageProps }> {
  const response = await fetch('https://swapi.dev/api/people/1');
  const json = await response.json();
  // todo: validate json

  return {
    props: {
      name: json.name as string,
    },
  }
}

export default function Notes(props: NotesPageProps) {
  return <h1>{props.name}</h1>
};

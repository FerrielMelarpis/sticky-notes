type NotePageProps = {
  message: string;
}

export function Note(props: NotePageProps) {
  return (
    <h1 className="text-xl font-bold">{props.message}</h1>
  );
}

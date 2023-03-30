import { GetServerSideProps } from 'next';
import { HtmlMeta } from 'src/components/html_meta/html_meta';
import { Note } from 'src/components/note/note';

type SwapiResponse = {
  name: string;
  gender: string;
};
type NotePageProps = SwapiResponse;

// This runs on backend
export const getServerSideProps: GetServerSideProps<NotePageProps> = async (context) => {
  const slug = context.params?.slug;
  const response = await fetch(`https://swapi.dev/api/people/${slug}`);
  const json: SwapiResponse = await response.json();

  return {
    props: json,
  }
}

// This runs on frontend
export default function Page(props: NotePageProps) {
  return (
    <>
    <HtmlMeta title={`${props.name} notes`} />
    <Note message={props.name} />
    <Note message={props.gender} />
    </>
  )
};

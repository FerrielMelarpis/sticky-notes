import { GetServerSideProps } from 'next';
import { Note } from 'src/components/note/note';
import { child, get, ref } from "firebase/database";
import { database } from "src/services/firebase";

type Note = {
  id: number;
  note: string;
};
type NotePageProps = Note;

// This runs on backend
export const getServerSideProps: GetServerSideProps<NotePageProps> = async (context) => {
  const id = context.params?.id;
  const dbRef = ref(database);

  let response;
  try {
    console.log('requesting to firebase');
    response = await get(child(dbRef, `notes/${id}`));
    return {
      props: {
        id,
        note: response.val(),
      },
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// This runs on frontend
export default function Page(props: NotePageProps) {
  return (
    <>
      <h1>{props.id}</h1>
      <Note message={props.note} />
    </>
  )
};

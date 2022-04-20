import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import AddLyric from "../components/lyrics/AddLyric";
import client from '../ApolloClient'

const SingleSongDetail = () => {
  const params = useParams();
  const { loading, data, error } = useQuery(GET_SINGLE_SONGS, {
    variables: {
      id: params.id,
    },
  });


  if (loading) return "loading";
  if (error) return "error";
  return (
    <div className="container">
      {/* add lyric to the song  */}
      {data.song.lyrics.map((son)=> <p>{son.content}</p>)}
      {data.song.title}
      {}
      <AddLyric songId={params.id} />
    </div>
  );
};
const GET_SINGLE_SONGS = gql`
 query GetSingleSong($id: ID!) {
     song(id: $id) {
         id
         title
         lyrics {
             id
             content
         }
     }

 }
`
export default SingleSongDetail;
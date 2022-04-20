import React from "react";
import SongList from "../components/song/SongList";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Ring } from "react-awesome-spinners";
import { Link } from "react-router-dom";

const AllSongsPage = (props) => {
  const { loading, error, data } = useQuery(GET_ALL_SONGS);
  const [deleteSong, { data: aaa }] = useMutation(DELETE_SONG, {
    update(cache, {data}){
     const  { songs} = cache.readQuery({
       query: GET_ALL_SONGS,
     })
     cache.writeQuery({
       query: GET_ALL_SONGS,
       data: {
         songs: songs.filter((song)=> song.id !== data.deleteSong.id)
       }
     })
    }
  });

  
  const onSongDeleteHandler = (id) => {
    deleteSong({
      variables: {
        id,
      }
    })
    //  const {songs} = client.readQuery({ query: GET_ALL_SONGS });
    //  console.log(songs, "cache)");
    //  const filter =songs.map((song)=>song.id !==id)
     
    //  client.writeQuery({
    //    query: GET_ALL_SONGS,
    //    data: {
    //      songs: [...songs,...filter]
    //    }
    //  })
  //  client.cache.updateQuery({ query: GET_ALL_SONGS }, (data) => {
  //    const deleteSongLocally = [...data.songs].map((a)=>a.id !== id );
  //    return {
  //      songs: deleteSongLocally,
  //    };
  //  });
  // client.cache.modify({
  //   id:  client.cache.identify(),
  //   fields: {
  //     songs(existingCommentRefs, { DELETE }) {
  //       return DELETE;
  //     },
  //   },
  // });

  };
 
  if (loading) return <Ring />;
  if (error) return <p>Error :(</p>;
  return (
    <div className="container">
      <SongList songs={data.songs} deleteHandler={onSongDeleteHandler} />
      <Link to="/new-song">howe</Link>
    </div>
  );
};
const GET_ALL_SONGS = gql`
  query GetAllSongs {
    songs {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;
export default AllSongsPage;


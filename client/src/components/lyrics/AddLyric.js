import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const AddLyric = ({ songId }) => {
  const [lyric, setLyric] = useState("");
  const [addLyricToSong, { loading, data, error }] = useMutation(ADD_LYRIC, {
    // refetchQueries: ["GetSingleSong"],
  });
  const addLyricHandler = (e) => {
    e.preventDefault();
    if (lyric.trim().length < 1) {
      alert("enter lyric");
      return;
    }
    addLyricToSong({
      variables: {
        content: lyric,
        songId: songId,
      },
    });
  };

  return (
    <form onSubmit={addLyricHandler}>
      <input
        type="text"
        value={lyric}
        onChange={(e) => {
          setLyric(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

const ADD_LYRIC = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
export default AddLyric;

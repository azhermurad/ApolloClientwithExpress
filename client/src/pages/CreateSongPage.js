import { gql,  useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNewSong = () => {
  const [addSong, { loading,data,error }] = useMutation(ADD_SONG,{notifyOnNetworkStatusChange: true});
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  console.log(data, "loadonggggggggg");
  if (loading) return <div>loading..</div>;
  if (error) return <div>error:</div>;

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length < 1) {
      alert("please enter tile");
      return;
    }
    addSong({
      variables: {
        title: title,
      },
    }).then(()=>{
      // resetApolloContext()
      console.log(data)
      // reset()
      setTitle('')
      navigate('/')
    });
  };

  return (
    <>
      <div className="container">
        <h1>Create new song</h1>
        <form onSubmit={onSubmitHandler}>
          {/* <label htmlFor="newsong">New Song</label> */}
          <input
            type="text"
            id="newsong"
            onChange={onChangeHandler}
            value={title}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};
const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
    }
  }
`;
export default CreateNewSong;

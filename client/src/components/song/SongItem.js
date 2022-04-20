import { Link} from "react-router-dom";
import classes from "./SongItem.module.css";

const SongItem = ({ songs,deleteHandler }) => {
  
  return (
    <>
      {songs?.map((song) => (
        <li className={classes.song_item} key={song.id}>
          <Link to={'/songs/'+ song.id}>
            <p>{song.title}</p>
          </Link>
          <img
            src="/delete.svg"
            alt="not mage"
            onClick={() => {
              deleteHandler(song.id);
            }}
          />
        </li>
      ))}
    </>
  );
};
export default SongItem;

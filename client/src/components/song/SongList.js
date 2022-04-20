import SongItem from './SongItem';
import classes from './SongList.module.css'
const SongList = ({ songs, deleteHandler }) => {
  return (
    <ul className={classes.song_list}>
      <SongItem songs={songs} deleteHandler={deleteHandler} />
    </ul>
  );
};
export default SongList;
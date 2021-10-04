import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={'friend-list'}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

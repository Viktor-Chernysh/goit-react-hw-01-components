import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={isOnline ? s.isOnLine : s.isOffLine}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}
export default FriendItem;

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

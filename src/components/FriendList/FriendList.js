import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friendItems }) => {
  return (
    <ul className={css.friendList}>
      {friendItems.map(e => {
        return (
          <FriendListItem
            key={e.id}
            isOnline={e.isOnline}
            avatar={e.avatar}
            name={e.name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;

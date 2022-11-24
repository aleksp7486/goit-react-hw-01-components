import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FriendListItem';

const FriendList = ({ friendItems }) => {
  return (
    <ul>
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

import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendsBoard } from './FriendList.styled';

const FriendList = ({ friendItems }) => {
  return (
    <FriendsBoard>
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
    </FriendsBoard>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;

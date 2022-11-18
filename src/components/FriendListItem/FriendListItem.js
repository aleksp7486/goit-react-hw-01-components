import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;

import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import { ItemFriend, AvatarFriends, Name, Status } from "./FriendList.styles";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ItemFriend key={id}>
      <Status isOnline={isOnline}></Status>
      <AvatarFriends src={avatar} alt="" width="48" />
      <Name>{name}</Name>
    </ItemFriend>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import { AvatarFriends, Name, Status } from "./FriendList.styles";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <AvatarFriends src={avatar} alt="" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

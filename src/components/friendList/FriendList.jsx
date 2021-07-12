import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { FriendLst } from "./FriendList.styles";

export const FriendList = ({ friends }) => {
  return (
    <FriendLst>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </FriendLst>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf.isRequired,
};

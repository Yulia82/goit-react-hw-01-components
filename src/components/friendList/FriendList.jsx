import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem";
import { ItemFriend, FriendLst } from "./FriendList.styles";

export const FriendList = ({ friends }) => {
  return (
    <FriendLst>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ItemFriend key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </ItemFriend>
      ))}
    </FriendLst>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

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

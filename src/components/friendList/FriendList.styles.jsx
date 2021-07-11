import styled from "@emotion/styled";

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;

  border-bottom: 1px solid #eeeeee;
  border-radius: 12px;

  background-color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const AvatarFriends = styled.img`
  width: 76px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

export const Status = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #000000;
  background-color: ${props => (props.isOnline ? "green" : "red")};
`;

export const FriendLst = styled.ul`
  width: 370px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  background-color: rgb(248, 248, 248);
`;

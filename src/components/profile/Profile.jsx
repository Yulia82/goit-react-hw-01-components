import defaultImage from "../default.jpg";
import PropTypes from "prop-types";
import {
  Container,
  Avatar,
  Name,
  Datauser,
  Stats,
  Item,
  Description,
  Quantity,
  Label,
} from "./Profile.styles";

export const Profile = ({ name, tag, location, src, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar
          src={src}
          alt="Аватар пользователя"
          // class="avatar"
        />
        <Name>{name}</Name>
        <Datauser>{tag}</Datauser>
        <Datauser>{location}</Datauser>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
};

Profile.defaultProps = {
  src: defaultImage,
};

Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

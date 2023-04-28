import PropTypes from "prop-types";
import {
  UserProfile, Description, Avatar, UserName, UserTag, UserLocation, Stats,
StatsItem, Label, Quantity} from "./Profile.styled";

export const Profile = ({ username,
    tag,
    location,
    avatar,
    stats }) => (
<UserProfile>
  <Description>
      <Avatar
              src={avatar}
              alt="User avatar"
      />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{ location}</UserLocation>
  </Description>
  <Stats>
    <StatsItem>
      <Label >Followers</Label>
      <Quantity>{stats.followers }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes }</Quantity>
    </StatsItem>
  </Stats>
</UserProfile>);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  })
}
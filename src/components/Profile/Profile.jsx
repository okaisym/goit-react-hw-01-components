import {List, ProfileContainer, PersonalData, Name, ProfileDetails, Image, StatsSpans, StatsNumber} from "./Profile.styled";


export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
      <ProfileContainer>
            <PersonalData>
        <Image
          src={avatar}
          alt={username}
          
        />
        <Name>{username}</Name>
        <ProfileDetails>@{tag}</ProfileDetails>
        <ProfileDetails>{location}</ProfileDetails>
      </PersonalData>
    
      <List>
        <li>
          <StatsSpans>Followers</StatsSpans>
          <StatsNumber>{stats.followers}</StatsNumber>
        </li>
        <li>
          <StatsSpans>Views</StatsSpans>
          <StatsNumber>{stats.views}</StatsNumber>
        </li>
        <li>
          <StatsSpans>Likes</StatsSpans>
          <StatsNumber>{stats.likes}</StatsNumber>
        </li>
      </List>
    </ProfileContainer>
    );
};
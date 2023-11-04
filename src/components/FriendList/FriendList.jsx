import {List} from './FriendList.styled';
import {FriendListItem} from './FriendListItem';
import friends from 'friends.json';

export const FriendList = () => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};
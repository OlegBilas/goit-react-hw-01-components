import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}>
      <FriendListItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        id={friends.id}
      />
    </FriendList>
  </>
);

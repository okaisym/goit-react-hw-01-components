import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import userData from 'user.json';
import statsData from 'data.json';
import {Main} from './App.styled';
import friends from 'friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from 'transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
      <Main>
        <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
  />
 
    <Statistics title="Upload stats" stats={statsData} />

    <FriendList friends={friends} />
   
    <TransactionHistory items={transactions} />

      </Main>
  );
};

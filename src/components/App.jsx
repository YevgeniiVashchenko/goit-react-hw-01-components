import { Profile } from 'components/profile/Profile';
import user from '../data/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from '../data/data.json';
import {FriendList} from 'components/friend-list/FriendList';
import friends from '../data/friends.json';
import {TransactionHistory} from 'components/transaction-history/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
    <Profile user={user} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
    </div>
  );
};

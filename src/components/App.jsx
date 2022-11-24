import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      flexWrap="wrap"
      maxWidth="1200px"
      m="0 auto"
      as="section"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats!" stats={data} />
      <FriendList friendItems={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};

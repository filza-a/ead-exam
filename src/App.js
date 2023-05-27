import './App.css';
import AnotherUserParticipation from './components/AnotherUserParticipation';
import PollDisplay from './components/PollDisplay';
import UserParticipation from './components/UserParticipation';

function App() {

  return (
    <>
      <h1>Polling App </h1>
      <PollDisplay />
      <UserParticipation />
      <AnotherUserParticipation />
    </>
  );
}

export default App;

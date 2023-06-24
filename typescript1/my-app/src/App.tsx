import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Status } from './components/Status';
import { Toast } from './components/templateliterals/Toast';

function App() {
  const personName = {
    first: 'Naruto',
    last: 'Uzumaki',
  };

  const nameList = [
    {
      first: 'Naruto',
      last: 'Uzumaki',
    },
    {
      first: 'Ichigo',
      last: 'Kurosaki',
    },
    {
      first: 'Anya',
      last: 'Forger',
    },
  ];

  return (
    <div className="App">
      <Container
        styles={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}>
        <Greet name="Henry" messageCount={5} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder</Heading>
        <Oscar>
          <Heading>Oscar goes to Brendan Fraser!</Heading>
        </Oscar>
        <Greet name="Henry" isLoggedIn={false} />
        <Button
          handleClick={(event, id) => console.log("I'm Clicked!", event, id)}
        />
        <Input
          placeholder="placeholder"
          handleChange={(event) => console.log(event.target.value)}
        />
      </Container>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message={'the count value is'} />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={['Henry', 'Kevin', 'Jacob']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            first: 'Naruto',
            last: 'Uzumaki',
            id: 1,
          },
          {
            first: 'Ichigo',
            last: 'Kurosaki',
            id: 2,
          },
          {
            first: 'Anya',
            last: 'Forger',
            id: 3,
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;

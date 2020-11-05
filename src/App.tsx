import React from 'react';
import { Alphabet } from './components/Alphabet';
import { Bar } from './components/Bar';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { Search } from './components/Search';

function App() {
  return (
    <>
      <Bar />
      <Layout 
        search={
          <Search onSubmit={() => {}}/>
        }
        alphabet={
          <Alphabet />
        }
        contacts={
          <Contact />
        }
      />
    </>
  );
}

export default App;

import React from 'react'
import { Alphabet } from './Alphabet';
import { BaseBar } from './BaseBar';
import { Contacts } from './Contacts';
import { Layout } from './Layout';
import { Search } from './Search';

interface Props {

}

export const Base: React.FC<Props> = () => {
    return (
     <>
        <BaseBar />
        <Layout 
            search={
              <Search onSubmit={() => {}}/>
             }
            alphabet={
                <Alphabet />
            }
            contacts={
                <Contacts />
            }
        />
    </>

    );
}
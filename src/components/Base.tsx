import React from 'react'
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
            contacts={
                <Contacts />
            }
        />
    </>

    );
}
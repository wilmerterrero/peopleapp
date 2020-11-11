import React from 'react'
import { BaseBar } from './BaseBar';
import { Contacts } from './Contacts';
import { Layout } from './Layout';

export const Base: React.FC = () => {
    return (
     <>
        <BaseBar title="People" />
        <Layout 
            contacts={
                <Contacts />
            }
        />
    </>

    );
}
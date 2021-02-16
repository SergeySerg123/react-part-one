import React from 'react';
import { Header } from '../components/Header';
import { MessageInput } from '../components/MessageInput';
import { MessageList } from '../components/MessageList';

export class Chat extends React.Component {
    
    render () {
        return (
            <>
                <Header />
                <MessageList />
                <MessageInput />
            </>
        );
    }  
}
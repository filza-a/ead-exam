import React from 'react';

const UserContext = React.createContext()

const VoteProvider = UserContext.Provider
const VoteConsumer = UserContext.Consumer


export { VoteProvider, VoteConsumer }
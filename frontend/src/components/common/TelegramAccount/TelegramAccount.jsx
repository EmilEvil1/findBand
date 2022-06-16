import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const TelegramAccount = () => {

    const handleTelegramResponse = response => {
        console.log(response);
    }

    return <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="FindBandBot" />
};

export default TelegramAccount;
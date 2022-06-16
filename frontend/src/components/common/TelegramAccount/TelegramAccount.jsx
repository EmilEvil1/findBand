import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const TelegramAccount = () => {


    const handleTelegramResponse = response => {
        console.log(response);
    };
    return (
        <>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="FindBandBot" />
            {/*<script*/}
            {/*    async*/}
            {/*    src="https://telegram.org/js/telegram-widget.js?19"*/}
            {/*    data-telegram-login="FindBandBot"*/}
            {/*    data-size="large"*/}
            {/*    data-radius="10"*/}
            {/*    data-auth-url=""*/}
            {/*    data-request-access="write">*/}
            {/*</script>*/}
        </>


    );
};

export default TelegramAccount;
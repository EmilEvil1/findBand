import React from 'react'
import TelegramLoginButton from 'react-telegram-login'
import {useTelegramAuth} from "../../../dto/hooks/Auth";

const TelegramAccount = () => {

    const telegramAuth = useTelegramAuth()

    const handleTelegramResponse = response => {
        telegramAuth.mutateAsync(response).then((e) => console.log(e))
    }

    return <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="FindBandBot" />
}

export default TelegramAccount;
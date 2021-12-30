import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { openingBrowserWithAction, setAccountsForAction } from 'redux/actions/Accounts';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import { notificationError } from 'redux/actions/Notification';
import { useForm } from 'react-hook-form';
import FormChangePassword from 'components/ActionComponent/changePassword/formChangePassword';
import delay from 'helpers/delay';
import ProcessSetting from 'components/ProcessSetting';
import { NumberProcess } from '@jumbo/constants/NumberProcess';

export default function SettingPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            process: NumberProcess,
        },
    });
    return (
        <ProcessSetting typeAction={TypeActionAccount.CHANGE_PASSWORD}>
            <FormChangePassword onSubmit={handleSubmit} register={register} errors={errors} />
        </ProcessSetting>
    );
}

import React from 'react';
import { TypeActionAccount } from '@jumbo/constants/electron/TypeActionAccount';
import FormPosting from 'components/ActionComponent/posting/formPosting';
import { useForm } from 'react-hook-form';
import ProcessSetting from 'components/ProcessSetting';
export default function PostSetting() {
    const { handleSubmit } = useForm({ mode: 'onChange' });
    return (
        <ProcessSetting typeAction={TypeActionAccount.POSTING}>
            <FormPosting onSubmit={handleSubmit} isSelectedRow isViewDetail />
        </ProcessSetting>
    );
}

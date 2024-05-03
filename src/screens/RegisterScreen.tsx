import React from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/app';
import { RegisterFormValues } from '../types/app';
import Register from '../components/Register';
import { registerThunk } from '../features/auth/authThunk';
import useTranslations from '../context/useTranslations';

export default () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const messages = useTranslations();
    const { loading } = useAppSelector((state) => state.auth);

    const [redirectLoading, setRedirectLoading] = React.useState<boolean>(false);

    const onFinish = async (values: RegisterFormValues) => {
        try {
            await dispatch(registerThunk({ email: values.email, password: values.password }));
            message.success(messages['register.success']);
            setRedirectLoading(true);
            setTimeout(() => navigate('/login'), 1000)
        } catch (error: any) {
            message.error(error.message);
        }
    };

    return (
        <Register loading={loading || redirectLoading} onFinish={onFinish} />
    );
}

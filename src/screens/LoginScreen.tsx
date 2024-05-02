import React from 'react';
import { LoginFormValues } from '../types/app';
import Login from '../components/Login';

export default () => {
    const onFinish = (values: LoginFormValues) => console.log(values);

    return (    
        <Login onFinish={onFinish} />
    );
}

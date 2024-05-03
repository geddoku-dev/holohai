import React from 'react';
import { RegisterFormValues } from '../types/app';
import Register from '../components/Register';

export default () => {
    const onFinish = (values: RegisterFormValues) => console.log(values);

    return (    
        <Register onFinish={onFinish} />
    );
}

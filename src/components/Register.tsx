import React from 'react';
import { Link } from 'react-router-dom';
import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormText,
} from '@ant-design/pro-components';
import { theme, Button, Space } from 'antd';

import { RegisterFormValues } from '../types/app';

import useTranslations from '../context/useTranslations';

import classes from './Register.module.css';


interface IRegisterProps {
    onFinish: (values: RegisterFormValues) => void;
}

const Register: React.FC<IRegisterProps> = ({ onFinish }) => {
    const { token } = theme.useToken();
    const messages = useTranslations();

    const passwordStatusRender = (value: string | undefined) => {
        const getStatus = () => {
            if (value && value.length > 12) {
                return 'ok';
            }
            if (value && value.length > 6) {
                return 'pass';
            }
            return 'poor';
        };

        const status = getStatus();

        if (status === 'pass') {
            return (
                <div style={{ color: token.colorWarning }}>
                    {`${messages['password.strength']}: ${messages['password.strength.medium']}`}
                </div>
            );
        }

        if (status === 'ok') {
            return (
                <div style={{ color: token.colorSuccess }}>
                    {`${messages['password.strength']}: ${messages['password.strength.strong']}`}
                </div>
            );
        }

        return (
            <div style={{ color: token.colorError }}>
                {`${messages['password.strength']}: ${messages['password.strength.weak']}`}
            </div>
        );
    }

    return (
        <div
            className={classes.registerScreenContainer}
            style={{ backgroundColor: token.colorBgContainer }}
        >
            <LoginForm
                containerStyle={{ padding: 0, justifyContent: 'center', alignItems: 'center' }}
                title={<span style={{ userSelect: 'none', color: token.colorText }}>{messages['app.name']}</span>}
                subTitle={<span style={{ userSelect: 'none', color: token.colorTextDescription }}>{messages['app.subTitle']}</span>}
                submitter={{
                    render: (props, _) => (
                        <Button size='large' type='primary' onClick={props.submit} style={{ width: '100%' }}>
                            {messages['register.submit']}
                        </Button>
                    ),
                }}
                actions={
                    <Space className={classes.registerSubInfo}>
                        <Link to='/login'>{messages['register.subInfo']}</Link>
                    </Space>
                }
                onFinish={onFinish}
            >
                <ProFormText
                    name='username'
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={messages['register.placeholder.username']}
                    rules={[
                        {
                            required: true,
                            message: messages['register.rules.username'],
                        },
                    ]}
                />
                <ProFormText.Password
                    name='password'
                    fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'} />,
                        strengthText: messages['register.strengthText']
                    }}
                    placeholder={messages['register.placeholder.password']}
                    rules={[
                        {
                            required: true,
                            message: messages['register.rules.password'],
                        },
                        {
                            min: 8,
                            message: messages['register.password.minLength'],
                        },
                        {
                            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{8,}$/,
                            message: messages['register.password.pattern'],
                        },
                    ]}
                />
            </LoginForm>
        </div>
    );
}

export default Register;

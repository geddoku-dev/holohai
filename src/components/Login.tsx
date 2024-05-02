import React from 'react';
import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { theme, Button } from 'antd';
import { LoginFormValues } from '../types/app';

import useTranslations from '../context/useTranslations';

import classes from './Login.module.css';

interface ILoginProps {
    onFinish: (values: LoginFormValues) => void;
}

const Login: React.FC<ILoginProps> = ({ onFinish }) => {
    const { token } = theme.useToken();
    const messages = useTranslations();

    return (
        <div
            className={classes.loginScreenContainer}
            style={{ backgroundColor: token.colorBgContainer }}
        >
            <LoginForm
                containerStyle={{ padding: 0, justifyContent: 'center', alignItems: 'center' }}
                title={<span style={{ color: token.colorText }}>{messages['appName']}</span>}
                subTitle={messages['login.subTitle']}
                submitter={{
                    render: (props, _) => (
                        <Button size='large' type='primary' onClick={props.submit} style={{ width: '100%' }}>
                            {messages['login.submit']}
                        </Button>
                    ),
                }}
                onFinish={onFinish}
            >
                <>
                    <ProFormText
                        name='username'
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={messages['login.placeholder.username']}
                        rules={[
                            {
                                required: true,
                                message: messages['login.rules.username'],
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name='password'
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={messages['login.placeholder.password']}
                        rules={[
                            {
                                required: true,
                                message: messages['login.rules.password'],
                            },
                        ]}
                    />
                </>
                <div style={{ marginBlockEnd: 24 }}>
                    <ProFormCheckbox noStyle name='saveMe'>
                        {messages['login.autoLogin']}
                    </ProFormCheckbox>
                    <a style={{ float: 'right' }}>
                        {messages['login.forgottenPassword']}
                    </a>
                </div>
            </LoginForm>
        </div>
    );
}

export default Login;

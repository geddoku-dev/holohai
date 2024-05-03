import React from 'react';
import { Link } from 'react-router-dom';
import {
    LockOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { theme, Button, Space } from 'antd';
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
                title={<span style={{ userSelect: 'none', color: token.colorText }}>{messages['app.name']}</span>}
                subTitle={<span style={{ userSelect: 'none', color: token.colorTextDescription }}>{messages['app.subTitle']}</span>}
                submitter={{
                    render: (props, _) => (
                        <Button size='large' type='primary' onClick={props.submit} style={{ width: '100%' }}>
                            {messages['login.submit']}
                        </Button>
                    ),
                }}
                actions={
                    <Space className={classes.loginSubInfo}>
                        <Link to='/register'>{messages['login.subInfo']}</Link>
                    </Space>
                }
                onFinish={onFinish}
            >
                <ProFormText
                    name='email'
                    fieldProps={{
                        size: 'large',
                        prefix: <MailOutlined className={'prefixIcon'} />,
                    }}
                    placeholder={messages['login.placeholder.email']}
                    rules={[
                        {
                            type: 'email',
                            message: messages['login.rules.email.format'],
                        },
                        {
                            required: true,
                            message: messages['login.rules.email.required'],
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

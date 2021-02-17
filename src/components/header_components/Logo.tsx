import React from 'react';
import logoImg from '../../assets/image/logo.png';
import '../../styles/header/Logo.scss';

export default class Logo extends React.Component {
    render() {
        // TODO добавить линк
        return <a className='Logo' href="#">
            <img src={logoImg} alt="logo" />
        </a>;
    }
}

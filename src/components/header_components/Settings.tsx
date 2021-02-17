import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import '../../styles/header/Settings.scss';

export default class Settings extends React.Component {
    render() {
        return <Button variant="contained"><SettingsIcon/></Button>;
    }
}

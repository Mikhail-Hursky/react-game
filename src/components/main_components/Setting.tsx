import React from 'react';
import {useDispatch} from 'react-redux';
import QuantityCard from './QuantityCard';
import ShirtColor from "./ShirtColor";
import {hideSetting} from "../../redux/actions/settingActions";

function Setting() {
    return (
        <form className='container'>
            <QuantityCard/>
            <ShirtColor/>
        </form>
    );
}

export default Setting;

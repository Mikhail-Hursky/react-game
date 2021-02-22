import React from 'react';
import {useDispatch} from 'react-redux';
import QuantityCard from './QuantityCard';
import ShirtColor from "./ShirtColor";
import {hideSetting} from "../../redux/actions/settingActions";

function Setting() {
    const dispatch = useDispatch();

    return (
        <form className='container'>
            <QuantityCard/>
            <ShirtColor/>
            <button type="submit"
                    onClick={() => dispatch(hideSetting())}
                    className="btn btn-success mt-2">Ok!
            </button>
        </form>
    );
}

export default Setting;

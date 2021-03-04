import QuantityCard from './QuantityCard/QuantityCard';
import ShirtColor from "./ShirtColor/ShirtColor";

function Setting() {
    return (
        <form className='container'>
            <QuantityCard/>
            <ShirtColor/>
        </form>
    );
}

export default Setting;

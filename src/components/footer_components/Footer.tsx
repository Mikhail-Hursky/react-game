import React from 'react';
import '../../styles/footer/Footer.scss'
import LogoCurses from '../../assets/image/rs_school_js.svg';

export default class Footer extends React.Component {

    render() {
        return <footer className="Footer">
            <a href="https://rs.school/js/" target='_blank'>
                <img src={LogoCurses} alt="curses"/>
            </a>

            <a className='author' href="https://github.com/Mikhail-Hursky" target='_blank'>by Mikhail-Hursky</a>

            <p>2021</p>
        </footer>;
    }
}

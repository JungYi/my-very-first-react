import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = (props) => (
    <ul className='gnb'>
        {/* <li>
            <a href='#none' className='tab_day on'>월요일</a>
        </li>
        <li>
            <a href='#none' className='tab_day'>화요일</a>
        </li>
        <li>
            <a href='#none' className='tab_day'>수요일</a>
        </li> */}
        {/* <li>
            <Link to="/?day=mon" className={ props.day === 'mon' ? 'tab_day on' : 'tab_day' }>월요일</Link>
        </li>
        <li>
            <Link to="/?day=tue" className={ props.day === 'tue' ? 'tab_day on' : 'tab_day' }>화요일</Link>
        </li>
        <li>
            <Link to="/?day=wed" className={ props.day === 'wed' ? 'tab_day on' : 'tab_day' }>수요일</Link>
        </li> */}
        <li>
            <a href='/?day=mon' className={ props.day === 'mon' ? 'tab_day on' : 'tab_day' }>월요일</a>
        </li>
        <li>
            <a href='/?day=tue' className={ props.day === 'tue' ? 'tab_day on' : 'tab_day' }>화요일</a>
        </li>
        <li>
            <a href='/?day=wed' className={ props.day === 'wed' ? 'tab_day on' : 'tab_day' }>수요일</a>
        </li>
    </ul>
)

export default Gnb;
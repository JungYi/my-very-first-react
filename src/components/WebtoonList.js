import React from 'react';
import { Link } from 'react-router-dom';


const WebtoonList = (props) => {
    return (
        // <div>
            <ul className='list_webtoon'>
                { props.list.map((webtoon, index) => (
                    <li key={index}>
                        <Link to="/" className='link_webtoon'>
                            <img src={webtoon.thumbnail} className='img_webtoon' alt={webtoon.title} />
                            <div className='info_webtoon'>
                                <strong className='tit_webtoon'>
                                    {webtoon.title}

                                </strong>
                                {webtoon.artist}
                            </div>

                        </Link>

                    </li>
                ))}
            </ul>
        // </div>
        
    );
};

export default WebtoonList;
import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { Link } from 'react-router-dom';
import { valueConverter } from '../../../utils';
const API_KEY = import.meta.env.VITE_API_KEY;

const Recomended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const fetchData = async () => {
        const relatedVideoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideoURL).then(res => res.json()).then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='recomended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recomended
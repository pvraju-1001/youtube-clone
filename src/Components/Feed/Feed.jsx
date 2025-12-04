import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { valueConverter } from '../../../utils'
import moment from 'moment'
const API_KEY = import.meta.env.VITE_API_KEY;

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoListUrl).then(response => response.json()).then(data => setData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{valueConverter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Feed
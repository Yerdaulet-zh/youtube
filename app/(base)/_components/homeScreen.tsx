'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

import s from './homeScreen.module.css';

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<VideoDto[] | null>(null);

    useEffect(() => {
        (async() => {
            try {
                const dataFromServer = await fetch('/api/videos', {
                    method: 'GET'
                });
                const response = await dataFromServer.json();
                setData(response.data);
            }
            finally {
                setIsLoading(false);
            }
        })();
    }, [])

    if (isLoading) {
        return <div>Loading ...</div>
    };

    return (
        <div className={s.content}>
            {data && data?.length > 0 ? (
                data.map(videoInfo => (
                    <div className={s.videoBlock} key={videoInfo.videoId}>
                        <Link href={`/video/${videoInfo.videoId}`} className={s.videoPreview}>
                            <Image
                                src={`https://img.youtube.com/vi/${videoInfo.videoId}/hqdefault.jpg`}
                                alt='youtube videos'
                                fill
                                className={s.videoImage}
                            />
                        </Link>
                        <div className={s.videoInfoContainer}>
                            <div className={s.channelImage}>
                                <Link href={`/profile/${videoInfo.authorUrl}`} className={s.hiddenText}>
                                    {videoInfo.title}
                                </Link>
                            </div>

                            <div className={s.videoInfo}>
                                <Link href={`/video/${videoInfo.videoId}`} className={s.videoTitleLink}>
                                    <b>{videoInfo.title}</b>
                                </Link>
                                <Link href={`/profile/${videoInfo.authorUrl}`} className={s.channelNameLink}>
                                    {videoInfo.authorName}
                                </Link>
                            </div>
                        </div>
                    <Link
                        href={`/video/${videoInfo.videoId}`}
                        className={s.link}
                    />
                    </div>

                ))
                ) : (
                    <div key={'ascasc'}>No data</div>
            )}
        </div>
    );
};

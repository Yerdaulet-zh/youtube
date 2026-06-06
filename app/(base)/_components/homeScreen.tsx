'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

import s from './homeScreen.module.css';

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<string[] | null>(null);

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
    return (
        <div className={s.content}>
            {data && data?.length > 0 ? (
                data.map(videoId => (
                    <div className={s.videoBlock} key={videoId}>
                        <Link href={`/video/${videoId}`} className={s.videoPreview}>
                            <Image
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                alt='youtube videos'
                                fill
                                className={s.videoImage}
                            />
                        </Link>
                        <div className={s.videoInfoContainer}>
                            <div className={s.channelImage}>
                                <Link href="#" className={s.hiddenText}>
                                    Channel Image
                                </Link>
                            </div>

                            <div className={s.videoInfo}>
                                <Link href={`/video/${videoId}`} className={s.videoTitleLink}>
                                    Title
                                </Link>
                                <Link href="#" className={s.channelNameLink}>
                                    Channel
                                </Link>
                            </div>
                        </div>
                    <Link
                        href={`/video/${videoId}`}
                        className={s.link}
                    />
                    </div>

                ))
                ) : (
                    <div>No data</div>
            )}
        </div>
    );
};

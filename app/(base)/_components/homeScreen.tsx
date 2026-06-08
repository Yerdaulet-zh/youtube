'use client';

import Image from 'next/image';
import Link from 'next/link';

import s from './homeScreen.module.css';

type HomeScreenProps = {
    data: VideoDto[];
}

export default function HomeScreen({data} : HomeScreenProps) {
    return (
        <div className={s.content}>
            {data && data.length > 0 ? (
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

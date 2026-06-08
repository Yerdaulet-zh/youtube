'use client';

import Link from "next/link";
import s from "./videoScreen.module.css";

type VideoScreenPorps = {
    data: VideoDto;
};

export default function VideoScreen({ data }: VideoScreenPorps) {
    return (
        data && <div className={s.content}>
            <iframe
                className={s.iframe}
                key={data.videoId}
                src={`https://www.youtube.com/embed/${data.videoId}?autoplay=1`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />

            <p className={s.videoTitle}>
                <b>{data.title}</b>
            </p>

            <div className={s.videoInfoContainer}>
                <div className={s.channelImage}>
                    <Link href={`/profile/${data.authorUrl}`} className={s.hiddenText}>
                        Channel Image
                    </Link>
                </div>

                <Link href={`/profile/${data.authorUrl}`} className={s.channelNameLink}>
                    {data.authorName}
                </Link>
            </div>
        </div>
    );
};

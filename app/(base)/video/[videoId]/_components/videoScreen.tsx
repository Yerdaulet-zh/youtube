'use client';

import Link from "next/link";

import s from "./videoScreen.module.css";

type VideoScreenPorps = {
    videoId: string;
};

export default function VideoScreen({ videoId }: VideoScreenPorps) {
    return (
        <div className={s.content}>
            <iframe
                className={s.iframe}
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />

            <p className={s.videoTitle}>
                <b>Title</b>
            </p>

            <div className={s.videoInfoContainer}>
                <div className={s.channelImage}>
                    <Link href="#" className={s.hiddenText}>
                        Channel Image
                    </Link>
                </div>

                <Link href="#" className={s.channelNameLink}>
                    Channel
                </Link>
            </div>
        </div>
    );
};

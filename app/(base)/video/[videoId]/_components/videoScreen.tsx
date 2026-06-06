'use client';

type VideoScreenPorps = {
    videoId: string;
};

export default function VideoScreen({ videoId }: VideoScreenPorps) {
    return (
        <div>
            <iframe
                key={videoId}
                width="150"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};

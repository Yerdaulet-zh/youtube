'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

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
    }, [isLoading])
    return (
        <div>
            {data && data?.length > 0 ? (
                data.map(videoId => (
                    <Link
                        href={`/video/${videoId}`}
                        key={videoId}

                    >
                        <Image
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt='youtube videos'
                            width={150}
                            height={150}
                        />
                    </Link>
                ))
                ) : (
                    <div>No data</div>
            )}
        </div>
    );
};

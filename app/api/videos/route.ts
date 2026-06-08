const VideosData = new Set<string>([
    '1D6SBcFrfSo',
    'XH1G58QqPIM',
    'V1PxgjIhTw0',
    'A5PiecCRnE0',
    'stu2Wygd-f8',
    '665UnOGx3Pg',
    'DTR2p7D6tjk',
    'icOSkM48Auc',
    'BKonNa7XPdg'
]);

export async function GET(request: Request) {
    const urlObject = new URL(request.url);
    const videoId = urlObject.searchParams.get('videoId');
    if (videoId) {
        const rawResult = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
        );
        const videoInfo = await rawResult.json();
        const author_url = videoInfo.author_url.split('/').at(-1);
        return Response.json({
            ok: true,
            data: {
                videoId,
                title: videoInfo.title,
                authorName: videoInfo.author_name,
                authorUrl: author_url
            }
        });
    };

    const promises: Promise<{ videoId: string; title: string; authorName: string; authorUrl: string; }>[] = [...VideosData].map(async (videoId) => {
        const rawResult = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
        );
        const videoInfo = await rawResult.json();
        const author_url = videoInfo.author_url.split('/').at(-1);
        return {
            videoId,
            title: videoInfo.title,
            authorName: videoInfo.author_name,
            authorUrl: author_url
        }
    });

    const result = await Promise.all(promises);

    return Response.json({
        ok: true,
        data: result
    })
};

export async function POST(request: Request) {
    const data = await request.json();

    if (VideosData.has(data.videoId)) {
        return Response.json({
            ok: false,
            error: "The video already exists in the database"
        }, { status: 400 })
    }
    VideosData.add(data.videoId);

    return Response.json({
        ok: true
    });
};

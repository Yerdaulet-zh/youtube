const VideosData = new Set<string>();

export async function GET() {
    VideosData.add("1D6SBcFrfSo")
    VideosData.add("XH1G58QqPIM")
    VideosData.add("V1PxgjIhTw0")
    VideosData.add("A5PiecCRnE0")
    VideosData.add("stu2Wygd-f8")
    VideosData.add("665UnOGx3Pg")
    VideosData.add("DTR2p7D6tjk")
    VideosData.add("icOSkM48Auc")
    VideosData.add("BKonNa7XPdg")

    return Response.json({
        ok: true,
        data: Array.from(VideosData)
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

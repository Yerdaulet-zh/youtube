import type { Metadata } from "next";
import VideoScreen from "./_components/videoScreen";

export const metadata: Metadata = {
  title: "video",
};

type VideoPageProps = {
  params: Promise<{videoId: string}>
}

async function VideoPage(
  { params }: VideoPageProps
) {
  const data = await params;
  const videoId = data.videoId
  try {
    const dataFromServer = await fetch(`${process.env.SERVER_API_URL}/api/videos?videoId=${videoId}`, {
      method: 'GET'
    });
    const response = await dataFromServer.json();
    return (
      <VideoScreen data={response.data} />
    )
  }
  catch (error) {
    return <div>error</div>
  }
}

export default VideoPage;

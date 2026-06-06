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
  return (
    <>
      <VideoScreen videoId={videoId} />
    </>
  );
}

export default VideoPage;

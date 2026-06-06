import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "profile",
  description: "A clone of YouTube written in NextJS",
};

type PorfilePageProps = {
  params: Promise<{profileID: string}>
}

async function ProfilePage(
  { params }: PorfilePageProps
) {
    const data = await params;
    return (
      <div>
        Profile ID: { data.profileID }
      </div>
    );
  }

export default ProfilePage;

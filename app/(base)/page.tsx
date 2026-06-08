import { Suspense } from "react";
import HomeScreen from "./_components/homeScreen";

export default async function Home() {
  try {
    const dataFromServer = await fetch(`${process.env.SERVER_API_URL}/api/videos`, {
      method: 'GET'
    });
    const response = await dataFromServer.json();
    return (
      <HomeScreen data={response.data} />
    );
  }
  catch (error) {
    return <div>error</div>
  }
};

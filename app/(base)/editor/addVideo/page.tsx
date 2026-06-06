import type { Metadata } from "next";
import { AddVideo } from "./_components/addVideo";

export const metadata: Metadata = {
  title: "add video",
};

function AddVIdeoPage() {
    return (
        <div>
            <AddVideo />
        </div>
    );
}

export default AddVIdeoPage;
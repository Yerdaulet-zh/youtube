import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "video",
};

import { notFound } from "next/navigation";

export default function EditorPage() {
    // notFound();
    return <div>hello</div>;
}

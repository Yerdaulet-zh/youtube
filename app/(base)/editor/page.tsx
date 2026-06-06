import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "editor",
};

import { notFound } from "next/navigation";

export default function EditorPage() {
    notFound();
    return null;
}

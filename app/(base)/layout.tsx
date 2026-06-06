import Header from "@/components/header/header";
import LeftMenu from "@/components/leftMenu/leftMenu";

import s from "./layout.module.css";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={s.layout}>
      <Header />
      <LeftMenu />
      {children}
    </main>
  );
}

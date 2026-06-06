import Image from "next/image";
import Link from "next/link";

import s from "./header.module.css"

type HeaderPorps = {
    profileId: string;
};

function Header({profileId} : HeaderPorps ) {
    return (
        <header className={ s.header }>
            <Link href="/">
                <Image
                    src="/yt_logo_fullcolor_almostblack_digital.png"
                    alt="youtube logo"
                    width={93}
                    height={20}
                    priority
                />
            </Link>
            <div className={s.rightPart}>
                <Link href="/editor/addVideo" className={s.createYourVideo}>
                    create
                </Link>
                <Link href={`/profile/${profileId}`} className={s.yourPorfileName}>
                    <div className={s.hiddenText}>Go to profile</div>
                </Link>
            </div>
        </header>
    );
}

export default Header;

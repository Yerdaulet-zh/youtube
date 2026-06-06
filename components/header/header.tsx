import Image from "next/image";
import Link from "next/link";

import s from "./header.module.css"

function Header() {
    return (
        <>
            <div className={ s.header }>
                <Link href="/">
                    <Image
                        src="/yt_logo_fullcolor_almostblack_digital.png"
                        alt="youtube logo"
                        width={150}
                        height={45}
                        priority
                    />
                </Link>
            </div>
        </>
    );
}

export default Header;

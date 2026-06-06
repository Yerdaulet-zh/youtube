import Link from "next/link";
import Image from "next/image";
import s from "./leftMenu.module.css";

function LeftMenu() {
    return (
        <aside className={ s.leftMenu }>
            <nav className={ s.nav }>
                <Link href="/" className={s.link}>
                    <Image
                        src="icons/home-1-svgrepo-com.svg"
                        alt=""
                        width={15}
                        height={15}
                        unoptimized={true}
                        priority
                        className={s.icon}
                    />
                    Main
                </Link>
                <Link href="/profile/1325" className={s.link}>
                    <Image
                        src="icons/profile-circle-svgrepo-com.svg"
                        alt=""
                        width={15}
                        height={15}
                        unoptimized={true}
                        priority
                        className={s.icon}
                    />
                    Profile
                </Link>

                <div className={s.divider}/>

                <Link href="/editor/addVideo" className={s.link}>
                    <Image
                        src="icons/add-square-svgrepo-com.svg"
                        alt=""
                        width={15}
                        height={15}
                        unoptimized={true}
                        priority
                        className={s.icon}
                    />
                    Add video
                </Link>
                <Link href="/"  className={s.link}>
                    <Image
                        src="icons/video-file-svgrepo-com.svg"
                        alt=""
                        width={15}
                        height={15}
                        unoptimized={true}
                        priority
                        className={s.icon}
                    />
                    Your Video
                </Link>
            </nav>
        </aside>
    );
}

export default LeftMenu;

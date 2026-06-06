import Link from "next/link";
import s from "./leftMenu.module.css";

function LeftMenu() {
    return (
        <aside className={ s.leftMenu }>
            <nav className={ s.nav }>
                <Link href="/">Main</Link>
                <Link href="/editor/addVideo">Add video</Link>
                <Link href="/profile/1325">Profile</Link>

            </nav>
        </aside>
    );
}

export default LeftMenu;

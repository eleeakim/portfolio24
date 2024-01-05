import Link from "next/link";
import { Hash, Home, Image, Paperclip, PenTool } from "react-feather";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter()
    const openTab = router.pathname.split("/")[1]

    return(
        <div className={openTab === "gallery" ? "navbar special" : "navbar"}>
            <Link href='/' className={openTab === "" ? "active" : ""}>
                <Home size={22} />
                <div className="label">Home</div>
            </Link>
            <Link href='/about' className={openTab === "about" ? "active" : ""}>
                <Hash size={22} />
                <div className="label">About</div>
            </Link>
            <Link href='/blog' className={openTab === "blog" ? "active" : ""}>
                <PenTool size={22} />
                <div className="label">Blog</div>
            </Link>
            <Link href='/gallery' className={openTab === "gallery" ? "active" : ""}>
                <Image size={22} />
                <div className="label">Gallery</div>
            </Link>
            <Link href='/Resume.pdf'>
                <Paperclip size={22} />
                <div className="label">Resume</div>
            </Link>
        </div>
    )
}

export default Navbar;
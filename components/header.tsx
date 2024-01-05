import Link from "next/link"
import { links } from "../basicData"

const Header = () => {

    return(
        <div className="header">
            <Link href="/">
                <img src="/logo.png" alt="logo" />
            </Link>
            <div className='link-list'>
                {links.map((link, index) => {
                return(
                    <>
                        <a key={index} href={link.link}>
                            <p>{link.name}</p>
                            <link.icon size={22} />
                        </a>
                        {index != (links.length-1) && <div>/</div>}
                    </>
                )
                })}
            </div>
        </div>
    )
}

export default Header
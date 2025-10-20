import { useState } from "react"
import Hamburger from "./Hamburger"
import Link from "next/link"

export default function Header() {

    const [hamburgerState, setHamburgerState] = useState({
        "isActive": false
    })

    return (<header className={hamburgerState.isActive ? "activeHamburger" : "closedHamburger"}>
        <section className="logoBlock">
            <Link className="logoTitle" href="/">
                <h1>Mapa E<span className="logoTitleHighlight">sp</span>ecial</h1>
                <picture>
                    <source
                        media="(min-width: 975px)"
                        srcSet="/bird-logo.svg" alt="logo" width="340" height="55" />
                    <img src="/bird-logo-mobile.svg" alt="logo" width="150" height="55" />
                </picture>
            </Link>
        </section>
        <nav>
            <Hamburger hamburgerState={hamburgerState} setHamburgerState={setHamburgerState} />
            <ul className={hamburgerState.isActive ? "activeHamburger" : "closedHamburger"}>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/como-contribuir">Como Contribuir</a></li>
                <li><a href="/torradores">Catálago de Torradores</a></li>
            </ul>
        </nav>
    </header>
    )
}


import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import './styles.css'

function NavBar() {
    return (
        <div className="navbar">
            <h1>react-mktable</h1>
            <a data-testid="repository-link" href="https://github.com/vilmacio22/react-mktable">
                <div className="repository">
                    <div className="">
                        <GoMarkGithub color="#fff" />
                    </div>
                    <div className="">
                        <p>Repository</p>
                    </div>

                </div>
            </a>
        </div>
    )
}

export default NavBar

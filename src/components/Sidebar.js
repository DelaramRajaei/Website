import './Sidebar.css'

function Sidebar() {
    const topMargin = parseInt(getComputedStyle(window.document.body).fontSize) * 6;

    const menuClicked = (e) => {
        // document.getElementById(`section-${e.target.id}`).scrollIntoView()
        const scroll = document.getElementById(`section-title-${e.target.id}`).offsetTop;
        window.scrollTo({
            top: scroll - topMargin
        })
    }
    return <>
        <ul className="list-unstyled text-end side-menu">
            <li onClick={menuClicked} id="intro" className='active'>About me</li>
            <li onClick={menuClicked} id="interests">Research interests</li>
            <li onClick={menuClicked} id="education">Education</li>
            <li onClick={menuClicked} id="awards">Honors & Awards</li>
            <li onClick={menuClicked} id="teaching">Teaching Experience</li>
            <li onClick={menuClicked} id="projects">Academic projects</li>
            <li onClick={menuClicked} id="work">Work experiences</li>
            <li onClick={menuClicked} id="certificates">Certificates</li>
            <li onClick={menuClicked} id="skills">Skills</li>
            <li onClick={menuClicked} id="activities">Other activities</li>
            <li onClick={menuClicked} id="ref">References</li>
            <li onClick={menuClicked} id="contact">Contact</li>
            <li onClick={menuClicked} id="download">Download CV</li>
        </ul>
    </ >;
}

export default Sidebar;
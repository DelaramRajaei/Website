import { Link } from "react-router-dom";

function Menu() {
    const menuItems = [
        { title: 'homepage', link: '/' },
        { title: 'cv', link: '/cv' },
        // { title: 'publications', link: '/publications' },
        { title: 'projects', link: '/projects' },
        { title: 'certificates', link: '/certificates' },
        // { title: 'gallery', link: '/cergallerytificates' },
    ];
    const menus = menuItems.map(item => <li key={item.title} className="nav-item mx-4"><Link to={item.link}>{item.title}</Link></li>);
    return (<ul class="nav text-uppercase justify-content-center fw-bold">
        {menus}
    </ul>);
}

export default Menu;
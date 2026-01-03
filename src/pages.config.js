import Home from './pages/Home';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Solutions": Solutions,
    "SolutionDetail": SolutionDetail,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
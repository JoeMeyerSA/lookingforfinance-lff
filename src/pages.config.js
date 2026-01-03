import Home from './pages/Home';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Insurance from './pages/Insurance';
import Education from './pages/Education';
import EducationArticle from './pages/EducationArticle';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Solutions": Solutions,
    "SolutionDetail": SolutionDetail,
    "Insurance": Insurance,
    "Education": Education,
    "EducationArticle": EducationArticle,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
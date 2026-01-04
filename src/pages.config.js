import About from './pages/About';
import Calculators from './pages/Calculators';
import Contact from './pages/Contact';
import Education from './pages/Education';
import EducationArticle from './pages/EducationArticle';
import EligibilityCheck from './pages/EligibilityCheck';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import SolutionDetail from './pages/SolutionDetail';
import Solutions from './pages/Solutions';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Calculators": Calculators,
    "Contact": Contact,
    "Education": Education,
    "EducationArticle": EducationArticle,
    "EligibilityCheck": EligibilityCheck,
    "Home": Home,
    "Insurance": Insurance,
    "SolutionDetail": SolutionDetail,
    "Solutions": Solutions,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
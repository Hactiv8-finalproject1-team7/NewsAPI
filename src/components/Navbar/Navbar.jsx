import { Link } from 'react-router-dom';
import Search from '../Search/Search';

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto fixed inset-x-0 z-50 font-semibold font-balto">
      <div className="bg-[#f1f3f2] w-full flex items-center justify-center mx-auto">
        <div className="max-w-[1080px] mx-5 flex flex-row items-center  h-[6vh]">
          <nav className="flex flex-row items-center justify-between font-balto">
            <Link to="/indonesia" onClick={scrollToTop}>
              <div className="mx-4">Indonesia</div>
            </Link>
            <Link to="/programming" onClick={scrollToTop}>
              <div className="mx-4">Programming</div>
            </Link>
            <Link to="/covid" onClick={scrollToTop}>
              <div className="mx-4">COVID-19</div>
            </Link>
            <Link to="/saved" onClick={scrollToTop}>
              <div className="mx-4">Saved</div>
            </Link>
          </nav>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=" mx-auto fixed bg-slate-400 inset-x-0 z-50 max-w-[1440px]">
      <div className="flex flex-row items-center justify-between ">
        <nav className="flex flex-row items-center justify-between ">
          <Link to="/indonesia">
            <div className="mx-4">Indonesia</div>
          </Link>
          <Link to="/programming">
            <div className="mx-4">Programming</div>
          </Link>
          <Link to="/covid">
            <div className="mx-4">COVID-19</div>
          </Link>
        </nav>
        <div className="flex flex-row">
          <h1 className="mx-4">search</h1>
          <button className="mx-4">Cari berita</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

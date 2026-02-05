import { Link } from "react-router-dom";
import { useState } from "react";

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-primary-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/logo_blue.png"
                alt="GiantRock Cybersecurity Academy"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className="text-primary-900 hover:bg-primary-50 px-4 py-2 transition-colors duration-150 font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-secondary-500"
              >
                首頁
              </Link>
              <Link
                to="/about"
                className="text-primary-900 hover:bg-primary-50 px-4 py-2 transition-colors duration-150 font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-secondary-500"
              >
                關於我們
              </Link>
              <Link
                to="/courses"
                className="text-primary-900 hover:bg-primary-50 px-4 py-2 transition-colors duration-150 font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-secondary-500"
              >
                課程介紹
              </Link>
              <Link
                to="/instructors"
                className="text-primary-900 hover:bg-primary-50 px-4 py-2 transition-colors duration-150 font-medium text-sm tracking-wide border-b-2 border-transparent hover:border-secondary-500"
              >
                講師培訓
              </Link>
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 ml-2 transition-colors duration-150 font-semibold text-sm tracking-wide border border-accent-600"
              >
                聯絡我們
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-gray-100 transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 text-primary-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-3 space-y-1 border-t border-gray-200 pt-2">
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors duration-150 text-sm font-medium"
              >
                首頁
              </Link>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors duration-150 text-sm font-medium"
              >
                關於我們
              </Link>
              <Link
                to="/courses"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors duration-150 text-sm font-medium"
              >
                課程介紹
              </Link>
              <Link
                to="/instructors"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 text-primary-900 hover:bg-primary-50 transition-colors duration-150 text-sm font-medium"
              >
                講師培訓
              </Link>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white transition-colors duration-150 text-center text-sm font-semibold"
              >
                聯絡我們
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary-900 text-gray-300 border-t-4 border-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                巨磐資安培訓學院
              </h3>
              <p className="text-sm text-gray-400 mb-1 font-light">
                GiantRock Cybersecurity Academy
              </p>
              <p className="text-sm text-gray-400 font-light">
                拉資科科技有限公司
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2 tracking-wide">
                聯絡資訊
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                專為台灣中小製造業打造的實戰型資安培訓學院
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-2 tracking-wide">
                快速連結
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <Link
                  to="/"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors duration-150 font-light"
                >
                  首頁
                </Link>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors duration-150 font-light"
                >
                  關於我們
                </Link>
                <Link
                  to="/courses"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors duration-150 font-light"
                >
                  課程介紹
                </Link>
                <Link
                  to="/instructors"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors duration-150 font-light"
                >
                  講師培訓
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-secondary-400 transition-colors duration-150 font-light"
                >
                  聯絡我們
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-800 pt-6 mt-2">
            <p className="text-center text-xs text-gray-500 font-light tracking-wide">
              © 2026 拉資科科技有限公司 版權所有
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

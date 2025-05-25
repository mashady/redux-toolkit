import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from './langSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.currentLang);

  const toggleLanguage = () => {
    dispatch(setLanguage(currentLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <nav 
      className={`bg-indigo-700 text-white p-4 shadow-md ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold mr-6">
            {currentLang === 'en' ? 'mashady' : 
            'محمد مشاضي'
            }

          </h1>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            {currentLang === 'en' ? 'Home' : 'الرئيسية'}
          </a>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            {currentLang === 'en' ? 'About' : 'من نحن'}
          </a>
          <a href="#" className="hover:text-indigo-200 transition-colors">
            {currentLang === 'en' ? 'Contact' : 'اتصل بنا'}
          </a>
        </div>
        
        <button 
          onClick={toggleLanguage}
          className="px-4 py-2 bg-white text-indigo-700 rounded-md hover:bg-indigo-100 transition-colors font-medium"
        >
          {currentLang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
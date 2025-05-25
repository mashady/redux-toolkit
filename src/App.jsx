import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from './langSlice';
import { fetchPosts } from './postSlice';
import './App.css'
import Navbar from './Navbar';
function App() {
  const dispatch = useDispatch();
  const { welcome, description, fetchPosts: fetchText } = useSelector((state) => state.language.translations);
  const currentLang = useSelector((state) => state.language.currentLang);

  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const toggleLanguage = () => {
    dispatch(setLanguage(currentLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <>
      <Navbar />
      <div 
      className={`min-h-screen bg-gray-50 p-6 ${currentLang === 'ar' ? 'text-right' : 'text-left'}`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">{welcome}</h1>
          <p className="text-gray-600">{description}</p>
          <button 
            onClick={toggleLanguage}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            {currentLang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          </button>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{fetchText}</h2>
          
          {status === 'loading' && (
            <p className="text-gray-500 italic">
              {currentLang === 'en' ? "Loading..." : "جار التحميل..."}
            </p>
          )}
          
          {status === 'failed' && (
            <p className="text-red-500">
              {currentLang === 'en' ? `Error: ${error}` : `خطأ: ${error}`}
            </p>
          )}
          
          {status === 'succeeded' && (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
    </>
  );
}

export default App;
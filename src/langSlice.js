import { createSlice } from '@reduxjs/toolkit';

const translations = {
  en: {
    welcome: "Welcome",
    description: "This is an English description.",
    fetchPosts: "Fetch Posts",
  },
  ar: {
    welcome: "مرحبا",
    description: "هذه وصف باللغة العربية.",
    fetchPosts: "جلب المنشورات",
  },
};

const langSlice = createSlice({
  name: 'language',
  initialState: {
    currentLang: 'en',
    translations: translations['en'], 
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currentLang = action.payload;
      state.translations = translations[action.payload];
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;

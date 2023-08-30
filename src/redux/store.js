import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from './contact/index';
import PortfolioSlice from './portfolio/index'
import BlogSlice from './blog/index'
import SeoSlice from "./seo/index";
export const store = configureStore({
  reducer: {
    contact: ContactSlice,
    portfolio: PortfolioSlice,
    blog: BlogSlice,
    seo:SeoSlice,
  },
});
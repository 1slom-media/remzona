import React, { useEffect } from "react";
import HomeComponent from "../../components/home";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Data = useSelector((state) => state.seo.SeoGet.data);
  return (
    <>
      <HelmetProvider>
        {Data.map((elem) => (
          <Helmet>
            <title>{elem.meta_title}</title>
            <meta name={elem.meta_key} content={elem.meta_description} />
            <link rel="cononical" href="/" />
          </Helmet>
        ))}
        <HomeComponent />
      </HelmetProvider>
    </>
  );
};

export default Home;

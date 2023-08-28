import React, { Suspense } from "react";
import { useState } from "react";
import ErrorFallBack from "./ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));

const LazyApp = () => {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleNav = (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "Home") {
      setShowHome(true);
      setShowAbout(false);
    } else {
      setShowHome(false);
      setShowAbout(true);
    }
  };


  return (
    <>
      <button onClick={() => setShowHome(!showHome)}>Home</button>
      <button onClick={(e) => handleNav(e)}>About</button>
      <ErrorBoundary FallbackComponent ={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<p>Loading..</p>}>{showHome && <Home />}</Suspense>
        <Suspense fallback={<p>Loading..</p>}>
          {showAbout && <About />}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default LazyApp;

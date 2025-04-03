import ReactGA from "react-ga4";

const TRACKING_ID = "G-T3RRKZC7YR"; // Replace with your actual ID
ReactGA.initialize(TRACKING_ID);

const trackPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export default trackPageView;

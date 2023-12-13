import { useEffect, useRef, useState } from "react";

import iconDown from "./images/icon-down.svg";
import iconUp from "./images/icon-up.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconYoutube from "./images/icon-youtube.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";

const socialStats = [
  {
    title: "facebook",
    nick: "@nathanf",
    followerCount: 1987,
    todayStats: 12,
    pageViews: 87,
    todayViews: 3,
    pageLikes: 52,
    todayLikes: -2,
  },
  {
    title: "twitter",
    nick: "@nathanf",
    followerCount: 1044,
    todayStats: 99,
    pageViews: 117,
    todayViews: 30,
    pageLikes: 507,
    todayLikes: 553,
  },
  {
    title: "instagram",
    nick: "@realnathanf",
    followerCount: 11000,
    todayStats: 1099,
    pageViews: 52000,
    todayViews: 1375,
    pageLikes: 5462,
    todayLikes: 2257,
  },
  {
    title: "youtube",
    nick: "Nathan F.",
    followerCount: 8239,
    todayStats: -144,

    pageViews: 1407,
    todayViews: -12,
    pageLikes: 107,
    todayLikes: -19,
  },
];

const totalFollowers = socialStats
  .map((s) => s.followerCount)
  .reduce((a, b) => (a += b));

function App() {
  const [dark, setIsDark] = useState("bright");

  const bodyEl = useRef(document.getElementsByTagName("body"));
  function handleDarkChange() {
    setIsDark(dark === "bright" ? "dark" : "bright");

    console.log(dark);
  }

  useEffect(
    function () {
      bodyEl.current[0].classList.toggle("dark");
    },
    [dark]
  );

  return (
    <div className="app">
      <div className={`header-bg ${dark}`}></div>
      <HeaderSection dark={dark} onDarkChange={handleDarkChange} />
      <Followers dark={dark} />
      <OverviewToday dark={dark} />

      <AttributionP dark={dark} />
    </div>
  );
}

function HeaderSection({ dark, onDarkChange }) {
  return (
    <div className="header">
      <div className="left-header">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: {totalFollowers}</p>
      </div>

      <div className="dark-button-container">
        Dark Mode{" "}
        <button className="dark-btn" onClick={() => onDarkChange()}>
          {dark === "bright" ? "🌕" : "🌚"}
        </button>
      </div>
    </div>
  );
}
function Followers({ dark }) {
  return (
    <div className="followers-stats">
      {socialStats.map((s) => (
        <FollowersBox dark={dark} key={s.title} social={s} />
      ))}
    </div>
  );
}

function OverviewToday({ dark }) {
  return (
    <>
      <h2>Overview - Today</h2>
      <div className="todays-overview-container">
        {socialStats.map((s) => (
          <OverviewContainer dark={dark} key={s.title} social={s} />
        ))}
      </div>
    </>
  );
}

function FollowersBox({ social, dark }) {
  return (
    <div className={`followers-box ${social.title} ${dark}`}>
      <div className="followers-box-header">
        {social.title === "twitter" && (
          <img src={iconTwitter} alt="twitter logo" />
        )}
        {social.title === "facebook" && (
          <img src={iconFacebook} alt="facebook logo" />
        )}
        {social.title === "instagram" && (
          <img src={iconInstagram} alt="instagram logo" />
        )}
        {social.title === "youtube" && (
          <img src={iconYoutube} alt="youtube logo" />
        )}
        <p>{social.nick}</p>
      </div>
      <div className="">
        <p>
          <b>{social.followerCount}</b>
        </p>
        <p>{social.title !== "youtube" ? "FOLLOWERS" : "SUBSCRIBERS"}</p>
      </div>

      <div className="percent-stats">
        <img src={social.todayStats > 0 ? iconUp : iconDown} alt="arrow" />
        <p className={social.todayStats > 0 ? "positive" : "negative"}>
          <b>{social.todayStats} Today</b>
        </p>
      </div>
    </div>
  );
}

function OverviewContainer({ social, dark }) {
  return (
    <div className="overview-container">
      <OverviewViews dark={dark} social={social} />
      <OverviewLikes dark={dark} social={social} />
    </div>
  );
}
function OverviewViews({ social, dark }) {
  return (
    <div className={`overview-views ${dark}`}>
      <div className="todays-stats">
        {social.title === "youtube" && (
          <>
            <p>Total Views</p>
            <img src={iconYoutube} alt="logo" />
          </>
        )}
        {social.title === "facebook" && (
          <>
            <p>Page Views</p>
            <img src={iconFacebook} alt="logo" />
          </>
        )}
        {social.title === "instagram" && (
          <>
            <p>Profile Views</p>
            <img src={iconInstagram} alt="logo" />
          </>
        )}
        {social.title === "twitter" && (
          <>
            <p>Retweets</p>
            <img src={iconTwitter} alt="logo" />
          </>
        )}
      </div>

      <div className="todays-stats">
        <p>
          <b>{social.pageViews}</b>
        </p>

        <div className="percent-stats">
          <img src={social.todayStats > 0 ? iconUp : iconDown} alt="arrow" />
          <p className={social.todayStats > 0 ? "positive" : "negative"}>
            <b> {social.todayViews}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
function OverviewLikes({ social, dark }) {
  return (
    <div className={`overview-likes  ${dark}`}>
      <div className="todays-stats">
        <p>Likes</p>
        {social.title === "youtube" && <img src={iconYoutube} alt="logo" />}
        {social.title === "facebook" && <img src={iconFacebook} alt="logo" />}
        {social.title === "instagram" && <img src={iconInstagram} alt="logo" />}
        {social.title === "twitter" && <img src={iconTwitter} alt="logo" />}
      </div>

      <div className="todays-stats">
        <p>
          <b>{social.pageLikes}</b>
        </p>

        <div className="percent-stats">
          <img src={social.todayStats > 0 ? iconUp : iconDown} alt="arrow" />
          <p className={social.todayStats > 0 ? "positive" : "negative"}>
            <b>{social.todayLikes}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

function AttributionP({ dark }) {
  return (
    <p className="attribution-p">
      Challenge by{" "}
      <a
        className={`attribution-link ${dark}`}
        href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className={`attribution-link ${dark}`}
        href="https://github.com/LukaszManiak"
        role="button"
      >
        Łukasz Maniak
      </a>
      .
    </p>
  );
}
export default App;

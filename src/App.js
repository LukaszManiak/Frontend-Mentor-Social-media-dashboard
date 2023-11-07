import { useState } from "react";

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
  console.log(totalFollowers);

  return (
    <div className="App">
      <HeaderSection />
      <Followers />
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <div className="left-header">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: {totalFollowers}</p>
      </div>

      <div>
        Dark Mode <button type="switch"></button>
      </div>
    </div>
  );
}
function Followers() {
  return (
    <div className="followers-stats">
      {socialStats.map((s) => (
        <FollowersBox social={s} />
      ))}
    </div>
  );
}

function OverviewToday() {
  return (
    <div>
      <h2>Overview - Today</h2>
    </div>
  );
}

function FollowersBox({ social }) {
  return (
    <div className="followers-box">
      <p>{social.title}</p>
    </div>
  );
}

function OverviewContainer() {
  return <div></div>;
}
function OverviewViews() {}
function OverviewLikes() {}
export default App;

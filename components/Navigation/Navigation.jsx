"use client";

import React, { useState } from "react";
import style from "./Navigation.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={style.mainContainer}>
      <ul
        className={`${style.container} 
      `}
      >
        <li className={style.links}>
          <button
            className={`${style["hamburger-button"]} ${
              isOpen ? style.open : ""
            } ${style.hiddenLargeView}`}
            onClick={() => handleClick()}
          >
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </button>
          <ul className={`${style.showLargeView} ${style.linkswrapper}`}>
            <li>
              <a className={style.navlink} href="">
                brands▼
              </a>
            </li>
            <li>
              <a className={style.navlink} href="">
                shop▼
              </a>
            </li>
            <li>
              <a className={style.navlink} href="">
                premium
              </a>
            </li>
            <li>
              <a className={style.navlink} href="">
                gift cards
              </a>
            </li>
          </ul>
        </li>
        <li className={style.iconWrap}>
          <img className={style.icon} src="/brava.webp" />
        </li>

        <li className={style.socials}>
          <a
            href="https://twitter.com"
            target="_blank"
            className={`${style.navlink} ${style.showLargeView}`}
          >
            become an affiliate
          </a>
          <li
            key="twitter"
            title="twitter"
            className={`${style.showLargeView} ${style.navIconWrap}`}
          >
            <TwitterIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
          <li
            key="music"
            title="twitter"
            className={`${style.showLargeView} ${style.navIconWrap}`}
          >
            <MusicNoteIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
          <li
            key="intagram"
            title="Instagram"
            className={`${style.showLargeView} ${style.navIconWrap}`}
          >
            <InstagramIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
          <li
            key="account"
            title="My Account"
            className={`${style.showMediumView} ${style.navIconWrap}`}
          >
            <PermIdentityIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
          <li title="Search" className={`${style.navIconWrap}`}>
            <SearchIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
          <li title="Cart" className={`${style.navIconWrap}`}>
            <ShoppingCartIcon
              className={style.navIcon}
              fontSize="small"
              style={{ color: "#fff" }}
            />
          </li>
        </li>
      </ul>
      <ul className={`${style.bottomMenu} ${isOpen ? style.show : ""}`}>
        <li className={style.menuLinks}>
          <span>brands</span>
          <span>→</span>
        </li>
        <li className={style.menuLinks}>
          <span>shop</span>
          <span>→</span>
        </li>
        <li>premium</li>
        <li>gift cards</li>
        <li>become an affiliate</li>
        <li className={style.socialLinks}>
          <TwitterIcon
            className={style.socialLinks}
            fontSize="small"
            style={{ color: "#fff" }}
          />
          <MusicNoteIcon
            className={style.socialLinks}
            fontSize="small"
            style={{ color: "#fff" }}
          />
          <InstagramIcon
            className={style.socialLinks}
            fontSize="small"
            style={{ color: "#fff" }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

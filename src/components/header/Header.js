import React, { useState } from "react";
import "./_header.scss";
import yt_logo_dark from "../../assets/images/yt_logo_rgb_dark.png";
import yt_logo_light from "../../assets/images/yt_logo_rgb_light.png";
import $ from "jquery";
import "../../_base.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiSearch, BiVideoPlus } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { FaMicrophone } from "react-icons/fa";
import Microphone from "../microphone/Microphone";

const Header = () => {
  const [currentTooltip, setCurrentTooltip] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchMicActive, setSearchMicActive] = useState(false);

  function onFocusHandler() {
    $(".searchIcon-toggle").removeClass("hidden");
    $(".input__wrapper").css({
      border: "2px solid #00669b",
      // "border-radius": "25px 0 0 25px",
    });
  }
  function onBlurHandler() {
    // if ($(".searchIcon-toggle").classList.contains("hidden")) {
    $(".searchIcon-toggle").addClass("hidden");
    $(".input__wrapper").css({
      border: "1px solid hsl(0, 0%, 18.82%)",
      // "border-radius": "25px 0 0 25px",
    });
    // }
  }
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />
      <img className="header__logo" src={yt_logo_dark} alt="" />
      <div className="header__form__wrapper">
        <form>
          <div className="input__wrapper">
            <div className="searchIcon-toggle hidden">
              <BsSearch size={22} />
            </div>
            <input
              type="text"
              placeholder="Search"
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            {searchText && (
              <div
                className="closeIcon-toggle"
                onClick={() => {
                  setSearchText("");
                }}
              >
                <TfiClose size={22} />
              </div>
            )}
          </div>
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>
        <div
          className="header__mic"
          onClick={() => {
            setSearchMicActive(true);
          }}
          onMouseOver={() => {
            setCurrentTooltip("search_voice");
          }}
          onMouseOut={() => {
            setCurrentTooltip("");
          }}
        >
          <FaMicrophone />
          {currentTooltip == "search_voice" && (
            <div className="_tooltip">Search with your voice</div>
          )}
        </div>
      </div>
      <div className="header__icons">
        <div
          className={`header__icon ${
            currentTooltip == "create" ? "highlight__icons" : ""
          }`}
          onMouseOver={(e) => {
            setCurrentTooltip("create");
            // $(e.target).parent('.header__icon').addClass("highlight__icons");
          }}
          onMouseOut={(e) => {
            setCurrentTooltip("");
            // $(e.target).parent(".header__icon").removeClass("highlight__icons");
          }}
        >
          <BiVideoPlus size={23} color="white" />
          {currentTooltip == "create" && <div className="_tooltip">Create</div>}
        </div>
        <div
          className={`header__icon ${
            currentTooltip == "notification" ? "highlight__icons" : ""
          }`}
          onMouseOver={() => {
            setCurrentTooltip("notification");
          }}
          onMouseOut={() => {
            setCurrentTooltip("");
          }}
        >
          <MdOutlineNotificationsNone size={23} color="white" />
          {currentTooltip == "notification" && (
            <div className="_tooltip">Notifications</div>
          )}
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
          alt=""
          // style={{ width: "10px" }}
        />
      </div>

      {searchMicActive && (
        <div className="mic__popup">
          <Microphone
            searchMicActive={searchMicActive}
            setSearchMicActive={setSearchMicActive}
          />
        </div>
      )}
    </div>
  );
};

export default Header;

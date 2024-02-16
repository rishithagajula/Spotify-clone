import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";


function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="data:image/png;base64,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"
        alt="Redundant alt text"
      />
      <Link to="/" className="sidebar__option">
        <SidebarOption Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/search" className="sidebar__option">
        <SidebarOption Icon={SearchIcon} title="Search" />
      </Link>
      <Link to="/yourLibrary" className="sidebar__option">
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      </Link>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar__songs">
      <SidebarOption title="My Top Favourite songs" />
      <SidebarOption title="Perfect Peace" />
      <SidebarOption title="Hey There Delilah" />
      <SidebarOption title="Issa Vibe" />
      <SidebarOption title="Take me Away" />
      <SidebarOption title="Under The Influence" />
      <SidebarOption title="THE GROOVE (STUDIO)" />
      <SidebarOption title="Like This" />
      <SidebarOption title="Trippy B" />
      </div>
    </div>
  );
}

export default Sidebar;

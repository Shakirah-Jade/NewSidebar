import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "FileShare",
    path: "/fileshare",
    icon: <FaIcons.FaFile />,
    cName: "nav-text",
  },
  {
    title: "Inbox",
    path: "/inbox",
    icon: <FaIcons.FaInbox />,
    cName: "nav-text",
  },
  {
    title: "Sent",
    path: "/sent",
    icon: <IoIcons.IoMdSend />,
    cName: "nav-text",
  },
  {
    title: "Drafts",
    path: "/drafts",
    icon: <FaIcons.FaDraftingCompass />,
    cName: "nav-text",
  },
  {
    title: "Archieve",
    path: "/archieve",
    icon: <IoIcons.IoMdArchive />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Mentor from "pages/Mentor/Mentor.js";
import Mentee from "pages/Mentee/Mentee.js";
import Message from "pages/Message/Message.js";
import Profile from "pages/Profile/Profile.js";
import MentorSlotPage from "pages/MentorSlotPage/MentorSlotPage.js";
import { Route } from "react-router";
const dashboardRoutes = [
  {
    path: "/mentor",
    name: "Mentor",
    icon: "nc-icon nc-chart-pie-35",
    component: Mentor,
    layout: "/admin",
  },
  {
    path: "/mentee",
    name: "Mentee",
    icon: "nc-icon nc-chart-pie-35",
    component: Mentee,
    layout: "/admin",
  },
  {
    path: "/message",
    name: "Message",
    icon: "nc-icon nc-chart-pie-35",
    component: Message,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-chart-pie-35",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/mentor-slot-page",
    name: "MentorSlotPage",
    icon: "nc-icon nc-chart-pie-35",
    component: MentorSlotPage,
    layout: "/admin",
  },
];
export default dashboardRoutes;

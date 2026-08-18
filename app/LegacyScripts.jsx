"use client";

import { useEffect } from "react";

export default function LegacyScripts({ activities = [] }) {
  useEffect(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      document.body.classList.add("overflow-hidden");

      const fadeLoader = () => {
        loadingScreen.classList.add("loader-fade");
        document.body.classList.remove("overflow-hidden");
      };

      const loadTimer = window.setTimeout(fadeLoader, 1900);
      const fallbackTimer = window.setTimeout(fadeLoader, 3600);

      if (document.readyState === "complete") {
        window.setTimeout(fadeLoader, 1900);
      } else {
        window.addEventListener("load", fadeLoader, { once: true });
      }

      return () => {
        window.clearTimeout(loadTimer);
        window.clearTimeout(fallbackTimer);
        window.removeEventListener("load", fadeLoader);
      };
    }
  }, []);

  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const menuIcon = document.getElementById("menuIcon");
    const mobileMenu = document.getElementById("mobileMenu");
    const navbar = document.getElementById("navbar");

    const closeMenu = () => {
      mobileMenu?.classList.add("hidden");
      menuIcon?.classList.add("fa-bars");
      menuIcon?.classList.remove("fa-xmark");
    };

    const toggleMenu = () => {
      mobileMenu?.classList.toggle("hidden");
      menuIcon?.classList.toggle("fa-bars");
      menuIcon?.classList.toggle("fa-xmark");
    };

    menuBtn?.addEventListener("click", toggleMenu);
    const mobileLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll("a")) : [];
    mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const onScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 40) {
        navbar.classList.add("bg-gray-950", "shadow-neon");
        navbar.classList.remove("bg-gray-950/55");
      } else {
        navbar.classList.remove("bg-gray-950", "shadow-neon");
        navbar.classList.add("bg-gray-950/55");
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      menuBtn?.removeEventListener("click", toggleMenu);
      mobileLinks.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const activityDetails = Object.fromEntries(activities.map((activity) => [activity.id, activity]));

    const activityDetail = document.getElementById("activity-detail");
    const activityBack = document.getElementById("activityBack");
    const activityDetailImage = document.getElementById("activityDetailImage");
    const activityDetailBadge = document.getElementById("activityDetailBadge");
    const activityDetailTitle = document.getElementById("activityDetailTitle");
    const activityDetailDate = document.getElementById("activityDetailDate");
    const activityDetailDescription = document.getElementById("activityDetailDescription");
    const activityDetailAudience = document.getElementById("activityDetailAudience");
    const activityDetailBenefit = document.getElementById("activityDetailBenefit");

    const buttons = Array.from(document.querySelectorAll(".activity-more"));
    const showDetail = (event) => {
      const detail = activityDetails[event.currentTarget.dataset.activity];
      if (!detail || !activityDetail) return;

      activityDetailImage.src = detail.image;
      activityDetailImage.alt = detail.title;
      activityDetailBadge.textContent = detail.badge;
      activityDetailTitle.textContent = detail.title;
      activityDetailDate.textContent = detail.date;
      activityDetailDescription.textContent = detail.description;
      activityDetailAudience.textContent = detail.audience;
      activityDetailBenefit.textContent = detail.benefit;
      activityDetail.classList.remove("hidden");
      activityDetail.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const hideDetail = () => {
      activityDetail?.classList.add("hidden");
      document.getElementById("activities")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    buttons.forEach((button) => button.addEventListener("click", showDetail));
    activityBack?.addEventListener("click", hideDetail);

    return () => {
      buttons.forEach((button) => button.removeEventListener("click", showDetail));
      activityBack?.removeEventListener("click", hideDetail);
    };
  }, [activities]);
  return null;
}


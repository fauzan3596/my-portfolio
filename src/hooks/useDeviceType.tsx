"use client";

import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType("Mobile");
    } else if (/tablet|ipad/.test(userAgent)) {
      setDeviceType("Tablet");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  return deviceType;
};

export default useDeviceType;

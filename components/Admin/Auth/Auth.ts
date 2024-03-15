import router from "next/router";

const API = `https://api.hostelbird.com/AdminHostelBird-dashboard/getAdminRole/HostelBirdAdmin`;

const GeTAdmin = async () => {
  const response = await fetch(API, {
    credentials: "include",
    mode: "cors",
  });
  if (response.status === 401) {
    return false;
  } else {
    return true;
  }
};
export { GeTAdmin };

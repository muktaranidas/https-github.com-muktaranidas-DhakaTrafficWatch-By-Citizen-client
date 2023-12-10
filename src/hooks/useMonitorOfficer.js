import { useEffect, useState } from "react";

const useMonitorOfficer = (email) => {
  const [isMonitorOfficer, setIsMonitorOfficer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  useEffect(() => {
    if (email) {
      fetch(`${base_url}/users/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsMonitorOfficer(data.data.role === "monitor-officer");
          setIsLoading(false);
        });
    }
  }, [email, base_url]);
  return [isMonitorOfficer, isLoading];
};
export default useMonitorOfficer;

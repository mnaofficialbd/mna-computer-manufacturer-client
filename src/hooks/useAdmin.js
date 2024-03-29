import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
  
    useEffect(() => {
      const email = user?.email;
  
      if (email) {
        fetch(`https://mna-computer-manufacturer.onrender.com/users/admin/${email}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.admin) {
              setAdmin(data.admin);
            } else {
              setAdmin(false);
            }
            setAdminLoading(false);
          });
      }
    }, [user]);
    return [admin, adminLoading];
  };
  
  export default useAdmin;
  
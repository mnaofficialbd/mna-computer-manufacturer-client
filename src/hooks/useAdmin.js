import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminAdding, setAdminAdding] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminAdding(false);
            })
        }
    }, [user])

    return [admin, adminAdding]
}

export default useAdmin;
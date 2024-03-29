/* import React, { useEffect, useState } from "react";
import { BodyDash, DashNavBar, Footer } from "../components/dashboard/index";
/* import { useAuthState } from "react-firebase-hooks/auth"; 
import { useNavigate } from "react-router-dom";
/* import { auth, db, logout } from "../services/firebase"; */
/* import { query, collection, getDocs, where } from "firebase/firestore"; 

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);

      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("an error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div>
      <DashNavBar value={name} />
      <BodyDash type="true" />
      <Footer />
    </div>
  );
};

export default Dashboard;
 */

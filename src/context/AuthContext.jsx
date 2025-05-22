import { createContext, useContext, useEffect, useState } from "react";
import { auth, fireDB } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentLoggedUser, setCurrentLoggedUser] = useState({});

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const userRef = doc(fireDB, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists) {
          setCurrentLoggedUser(userDoc.data());
        } else {
          console.log("no realtated user found on the database");
        }
      } else {
        setIsLoggedIn(false);
        setCurrentLoggedUser({});
      }

      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const value = { loading, isLoggedIn, currentLoggedUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

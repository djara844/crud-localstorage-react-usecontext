import React, { useEffect, useState } from "react";

import { AppRouter } from "./AppRouter";
import { UserContext } from "./components/UserContext";

const App = () => {
  const [user, setUser] = useState(
    localStorage.getItem("users") === null
      ? []
      : JSON.parse(localStorage.getItem("users"))
  );
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;

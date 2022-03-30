import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/Auth";
import { getUserIdFromToken } from "../utils/decodeToken";

function useUserId() {
  const { token } = useAuth();
  const [userId, setUserId] = useState<string | null>(
    getUserIdFromToken(token)
  );

  useEffect(() => {
    setUserId(getUserIdFromToken(token));
  }, [token]);
  return userId;
}

export default useUserId;

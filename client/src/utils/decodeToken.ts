import jwt_decode, { JwtPayload } from "jwt-decode";

export const getUserIdFromToken = (token: string | null) => {
  if (!token) return null;
  const decoded_JWT = jwt_decode<JwtPayload>(token);
  const user_id = decoded_JWT?.sub || null;
  return user_id;
};

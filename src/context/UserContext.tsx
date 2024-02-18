import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User } from "../types/User";

type Logged = true | false;
type UserState = {
  user: User;
  setUser(user: User): void;
  logged: Logged;
  setLogged(logged: Logged): void;
};

const defaultUser: User = {
  username: "",
  firstName: "",
  lastName: "",
  age: 23,
  createdAt: new Date(),
  description: "",
  followers: [],
  following: [],
  password: "",
  posts: [],
  verified: true,
  userId: "",
  followersCount: 0,
  followingCount: 0,
  postsCount: 0,
};

const UserContext = createContext<UserState | null>(null);

const useUser = (): UserState => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Please use UserProvider in parent component");
  }

  return context;
};

export const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User>(defaultUser);
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, logged, setLogged }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default useUser;

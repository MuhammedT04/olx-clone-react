import { app, auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);



interface AuthContextType {
  signUp: (email: string, password: string) => Promise<void>;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  uploadimg: (
    name: string,
    price: number,
    Description: string,
    userID: string,
    imgURL: string
  ) => Promise<void>;
  logOut: () => Promise<void>;
  user: any;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({
  children,
}: AuthContextProviderProps): JSX.Element {
  const [user, setUser] = useState({});

  async function signUp(email: string, password: string): Promise<void> {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user.email);

      const userS = response.user;
      await addDoc(collection(db, "user"), {
        uid: userS.uid,
        name: "",
        authProvider: "local",
        email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function logIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  async function uploadimg(
    name: string,
    price: number,
    Description: string,
    userID: any,
    imgURL: string
  ): Promise<void> {
    const date = new Date();
    try {
        console.log(imgURL,'imgajslfkjsd')
      await addDoc(collection(db, "products"), {
        name,
        price,
        imgURL,
        userId: userID.uid,
        createdAt: date.toString(),
        Description,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser({ currentUser });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, uploadimg }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext) as AuthContextType;
}

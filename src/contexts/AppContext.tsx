import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api/userApi";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";
// console.log(STRIPE_PUB_KEY);

type AppContext = {
  isLoggedIn: boolean;
  stripePromise: Promise<Stripe | null>;
};
const AppContext = createContext<AppContext | undefined>(undefined);

const stripePromise = loadStripe(STRIPE_PUB_KEY);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery(["validateToken"], apiClient.validateToken, {
    retry: false, // Prevents retrying if token is invalid
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
  return (
    <AppContext.Provider value={{ isLoggedIn: !isError, stripePromise }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};

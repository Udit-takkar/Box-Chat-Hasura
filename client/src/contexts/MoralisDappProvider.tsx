import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

interface MoralisDappProps {
  walletAddress: string | null;
  chainId: string | null;
}

const MoralisDappContext = React.createContext<MoralisDappProps>({
  walletAddress: null,
  chainId: null,
});

function MoralisDappProvider({ children }: any) {
  const { web3, Moralis, user } = useMoralis();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  useEffect(() => {
    Moralis.onChainChanged(function (chain) {
      setChainId(chain);
    });

    const unsubscribe = Moralis.onAccountChanged((account: string | null) => {
      console.log("changed", account);
      setWalletAddress(account);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(web3);
  useEffect(() => setChainId(web3?._network.chainId.toString() || null));
  useEffect(
    () =>
      setWalletAddress(
        // web3?.givenProvider?.selectedAddress || user?.get("ethAddress")
        user?.get("ethAddress")
      ),
    [web3, user]
  );

  return (
    <MoralisDappContext.Provider
      value={{
        walletAddress,
        chainId,
      }}
    >
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);
  if (context === undefined) {
    throw new Error("useMoralisDapp must be used within a MoralisDappProvider");
  }
  return context;
}

export { MoralisDappProvider, useMoralisDapp };

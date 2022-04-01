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
    // Moralis.onChainChanged(function (chain: string) {
    //   setChainId(chain);
    // });
    window.ethereum.on("accountsChanged", function (accounts: string[]) {
      setWalletAddress(accounts[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setChainId(web3?.givenProvider?.chainId));
  useEffect(
    () =>
      setWalletAddress(
        web3?.givenProvider?.selectedAddress || user?.get("ethAddress")
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

// Packages //
import { useState, useEffect, useContext, createContext } from "react";
import { keyStores, connect, WalletConnection } from 'near-api-js';

const NearContext = createContext();

export function useNear() {
    return useContext(NearContext);
}

export function NearProvider({ children }) {

    const [near, setNear] = useState(undefined);
    const [wallet, setWallet] = useState(undefined);

    useEffect(async () => {
        const config = {
            networkId: "testnet",
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
            nodeUrl: "https://rpc.testnet.near.org",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };
        const near_connection = await connect(config);
        const wallet_connection = new WalletConnection(near_connection);
        setNear(near_connection);
        setWallet(wallet_connection);
    }, []);

    const context = {
        near,
        wallet
    }

    return (
        <>
            <NearContext.Provider value={context}>
                {children}
            </NearContext.Provider>
        </>
    );
}
import { HashConnect } from "hashconnect";

async function walletConnectFcn() {
	console.log(`\n=======================================`);
	console.log("- Connecting wallet...");

	let saveData = {
		topic: "",
		pairingString: "",
		privateKey: "",
		pairedWalletData: null,
		pairedAccounts: [],
	};
	let appMetadata = {
		name: "Hedera dApp Days",
		description: "Let's build a dapp on Hedera",
		icon: "https://raw.githubusercontent.com/swirlds-matt/hedera-dapp-days/token2049-start/src/assets/hederaLogo.png",
	};

	// First init and store the pairing private key for later (this is NOT your account private key)

	// Then connect, storing the new topic for later

	// Generate a pairing string, which you can display and generate a QR code from

	// Find any supported local wallets
}

export default walletConnectFcn;

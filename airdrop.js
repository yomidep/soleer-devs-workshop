import { Connection, LAMPORTS_PER_SOL, PublicKey, Keypair} from "@solana/web3.js"
import wallet from "./wallet.json" assert {type: 'json'}
(async () => {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
    const myAddress = Keypair.fromSecretKey(new Uint8Array(wallet)).publicKey.toBase58()//new PublicKey(generateKey().publicKey)

    console.log({myAddress})

    const myAddressPublicKey = new PublicKey(myAddress)

    const signature = await connection.requestAirdrop(myAddressPublicKey, LAMPORTS_PER_SOL * 0.2)

    const res = await connection.confirmTransaction(signature)

    console.log(res)
})();
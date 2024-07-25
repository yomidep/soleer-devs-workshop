import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import { generateKey } from "./keygen.js"


(async () => {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
    const myAddress = new PublicKey(generateKey().publicKey)
    const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL * 0.2)

    await connection.confirmTransaction(signature)
})
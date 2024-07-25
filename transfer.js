import { Keypair, Connection, PublicKey} from "@solana/web3.js";
import walletKey from './wallet.json' assert {type: 'json'}

const to = new PublicKey('8D53gG4YNq3aJb98UdKwG8PS3TiQSwwnnzAWyLKnqgH1')
const from = Keypair.fromSecretKey(new Uint8Array(walletKey))

const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
console.log(to, from)

const transfer = async () => {
    const balance = connection.getBalance(from.publicKey)

    console.log(balance)
}

transfer()
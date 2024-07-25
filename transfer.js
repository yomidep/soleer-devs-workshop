import { Keypair, Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import walletKey from './wallet.json' assert {type: 'json'}

const to = new PublicKey("8D53gG4YNq3aJb98UdKwG8PS3TiQSwwnnzAWyLKnqgH1")
const from = Keypair.fromSecretKey(new Uint8Array(walletKey))

const connection = new Connection('https://api.devnet.solana.com', 'confirmed')
console.log(to, from)

const transfer = async () => {
    const balance = await connection.getBalance(from.publicKey)

    console.log({ balance })

   const  senderAddy = from.publicKey
   console.log(senderAddy)

    if (balance == 0) {
        //topup the sender address 
        const signature = await connection.requestAirdrop(senderAddy, LAMPORTS_PER_SOL * 0.2)

        const res = await connection.confirmTransaction(signature);

        console.log(res)
        // console.log("Nigga you broke")
    } else {
        const transaction = new Transaction()
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: balance
            })
        )
        transaction.feePayer = from.publicKey;

        const recentBlockhash = await connection.getLatestBlockhash('confirmed')
        transaction.recentBlockhash = recentBlockhash.blockhash

        // const message = transaction.compileMessage()


        const fee = (
            await connection.getFeeForMessage(
                transaction.compileMessage(),
                "confirmed"
            )
        ).value || 0

        // console.log({ message })

        transaction.instructions.pop()

        transaction.add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: balance - fee,
            })
        )

        const send = await sendAndConfirmTransaction(connection, transaction, [
            from,
        ])

        console.log({send})
    }
}

transfer()
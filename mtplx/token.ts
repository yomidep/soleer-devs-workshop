import { generateSigner } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
    createV1,
    TokenStandard
} from '@metaplex-foundation/mpl-token-metadata'


const umi = createUmi("https://apidevnet.solana.com");

const mint = generateSigner(umi)
await createV1(umi, {
    mint,
    authority: umi.identity,
    name: 'PRKR',
    uri: "www.google.com",
    sellerFeeBasisPoints: percentAmount(5.5),
    tokenStandard: TokenStandard.FungibleAsset,
}).sendAndConfirm(umi)

console.log({mint: mint.publicKey})
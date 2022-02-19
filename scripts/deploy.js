// const main = async () => {
//     const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

//     const gameContract = await gameContractFactory.deploy(
//         ["Leo", "Aang", "Pikachu"],       // Names
//         ["https://ibb.co/3B0kFD8", // Images
//             "https://ibb.co/PgHrmRy",
//             "https://ibb.co/3SQHFDW"],
//         [100, 200, 300],                    // HP values
//         [100, 50, 25],
//         "Elon Musk", // Boss name
//         "https://ibb.co/3SQHFDW", // Boss image
//         10000, // Boss hp
//         50 // Boss attack damage
//     );

//     await gameContract.deployed();
//     console.log("Contract deployed to:", gameContract.address);

//     let txn;
//     // We only have three characters.
//     // an NFT w/ the character at index 2 of our array.
//     txn = await gameContract.mintCharacterNFT(2);
//     await txn.wait();

//     txn = await gameContract.attackBoss();
//     await txn.wait();

//     txn = await gameContract.attackBoss();
//     await txn.wait();

//     console.log("Done!");
// };

// const runMain = async () => {
//     try {
//         await main();
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// runMain();

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    const gameContract = await gameContractFactory.deploy(
        ["Leo", "Aang", "Pikachu"],       // Names
        ["https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/1.png", // Images
            "https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/10.png",
            "https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/2.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],
        "Elon Musk", // Boss name
        "https://gateway.pinata.cloud/ipfs/QmZLiiPyzZ9V2metcCBWHapNWiWD8U5PvEkVi2LTUDk7Ly/3.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Leo", "Aang", "Pikachu"],       // Names
        ["https://ibb.co/3B0kFD8", // Images
            "https://ibb.co/PgHrmRy",
            "https://ibb.co/3SQHFDW"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],
        "Elon Musk", // Boss name
        "https://ibb.co/3SQHFDW", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();

    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("TokenUri:", returnedTokenUri);

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();
};

// https://ibb.co/3B0kFD8
// https://ibb.co/PgHrmRy
// https://ibb.co/3SQHFDW

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

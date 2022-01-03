// https://eth-ropsten.alchemyapi.io/v2/f3OQSWQY-J8wLo2SjkbD2i24xqLYHfdG

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/f3OQSWQY-J8wLo2SjkbD2i24xqLYHfdG",
      accounts: [
        "847b72301be6beebcde61b37a677aea3be3a756dd79ca1319584da56bbea111e",
      ],
    },
  },
};

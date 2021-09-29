const AnimeLootPhysicalCharacteristicsContract = artifacts.require("AnimeLootPhysicalCharacteristics");

module.exports = function(deployer) {
    deployer.deploy(AnimeLootPhysicalCharacteristicsContract);
}

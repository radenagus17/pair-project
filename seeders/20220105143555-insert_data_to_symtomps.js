"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Symtomps",
      [
        {
          name: "Sensitif Cahaya",
          DiseaseId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Penglihatan Kabur",
          DiseaseId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pilek",
          DiseaseId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Radang Hidung",
          DiseaseId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Berdengung",
          DiseaseId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gangguan Pendengaran",
          DiseaseId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pembengkakan Lidah",
          DiseaseId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Penyumbatan Pernapasan",
          DiseaseId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Demam melebihi 38.5 darajat celcius",
          DiseaseId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ruam pada kulit",
          DiseaseId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Symtomps", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

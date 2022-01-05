"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Diseases",
      [
        {
          name: "Katarak",
          description: "Katarak merupakan sebuah penyakit yang menyebabkan lensa mata menjadi keruh dan menyebabkan penglihatan berkurang atau kebutaan",
          level: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sinusitis",
          description: "Sinusistis adalah penyakit hidung yang terjadi akibat peradangan pada rongga sinus, yaitu rongga di sekitar saluran hidung di belakang tulang wajah yang berisi udara.",
          level: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meniere",
          description: "Meniere merupakan penyakit pada telinga bagian dalam yang terjadi karena kantung endolimfatikus mengalami pembengkakan akibat penumpukan cairan di dalam telinga.",
          level: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Glositis",
          description: "Glositis Merupakan jenis penyakit mulut yang dapat dikatakan sebagai penyakit radang pada lidah",
          level: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Campak",
          description: "Dikenali sebagai Measles merupakan demam ruam jangkitan virus dan sangat mudah untuk menjangkiti orang lain.",
          level: "3",
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
    await queryInterface.bulkDelete("Diseases", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

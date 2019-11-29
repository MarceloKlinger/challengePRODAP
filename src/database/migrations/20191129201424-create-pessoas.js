'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pessoas', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        data_nascimento: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
      });

  },

  down: (queryInterface) => {
      return queryInterface.dropTable('pessoas');

  }
};


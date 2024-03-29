import Sequelize from 'sequelize';

import Pessoa from '../app/models/Pessoa';

import databaseConfig from '../config/database';

const models = [Pessoa];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
import Sequelize, { Model } from 'sequelize';

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cidade: Sequelize.STRING,
        data_nascimento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Pessoa;
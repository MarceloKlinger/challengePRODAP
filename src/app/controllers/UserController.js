import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.findAll({
    });

    return res.json(user);
  }
  async store(req, res) {
    const nameExists = await User.findOne({ where: { nome: req.body.nome } })

    if(nameExists) {
      return res.status(400).json({ error: 'Já existe esse nome no BD' })
    }

    const { nome, cidade, data_nascimento  } = await User.create(req.body);

    return res.json({
      nome,
      cidade,
      data_nascimento
    });
  }

  async update(req, res) {
    const user = await User.findOne(req.body);

    const { nome, cidade, data_nascimento } = await user.update(req.body);

    return res.json({
      nome,
      cidade,
      data_nascimento,
    });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(401).json({ error: 'Pessoa não existe' });
    }

    await user.destroy();

    return res.send({
      message: "Sucesso"
    });
  }
}

export default new UserController();
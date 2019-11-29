import Pessoa from '../models/Pessoa';

class PessoaController {
  async index(req, res) {
    const pessoas = await Pessoa.findAll({
    });

    return res.json(pessoas);
  }
  async store(req, res) {
    const nameExists = await Pessoa.findOne({ where: { nome: req.body.nome } })

    if(nameExists) {
      return res.status(400).json({ error: 'Já existe esse nome no BD' })
    }

    const { nome, cidade, data_nascimento  } = await Pessoa.create(req.body);

    return res.json({
      nome,
      cidade,
      data_nascimento
    });
  }

  async update(req, res) {
    const pessoas = await Pessoa.findOne(req.body);

    const { nome, cidade, data_nascimento } = await pessoas.update(req.body);

    return res.json({
      nome,
      cidade,
      data_nascimento,
    });
  }

  async delete(req, res) {
    const pessoas = await Pessoa.findByPk(req.params.id);

    if (!pessoas) {
      return res.status(401).json({ error: 'Pessoa não existe' });
    }

    await pessoas.destroy();

    return res.send({
      message: "Sucesso"
    });
  }
}

export default new PessoaController();
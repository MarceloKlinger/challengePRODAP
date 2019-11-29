module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'challenge',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  }

}
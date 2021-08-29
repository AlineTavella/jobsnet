const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { email, gender, name, cpf, cep } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.name = name;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.cpf = cpf;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Desculpe! Encontramos um problema, que será resolvido.');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};

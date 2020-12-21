const AuthService = require('../../core/services/Auth.service');

class AuthController {

    generateToken(req, res) {
        try {

            const token = AuthService.generateToken(req.params);
            res.status(201).send({ token });

        } catch (err) {

            const { message, stack } = err;
            res.status(400).send({ message, stack });
        }
    }

    tokenVerify(req, res) {
        try {

            const message = AuthService.tokenVerify(req.body);
            res.status(200).send({ message });

        } catch (err) {

            const { message, status } = err;

            if (status) return res.status(status).send({ message });

            res.status(400).send({ message });

        }
    }
}

module.exports = new AuthController();
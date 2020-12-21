const jwt = require('jsonwebtoken');

class AuthService {

    generateToken({ id_cliente }) {
        const token = jwt.sign({ id_cliente }, process.env.SECRET, { expiresIn: 120 });
        return token;

    }

    tokenVerify(body) {

        const { authorization } = body;

        if (authorization) {

            try {

                const token = authorization.replace('Bearer ', '');
                const result = jwt.verify(token, process.env.SECRET);

                if (result) return { message: 'valid token!' }

            } catch (err) {

                const { message } = err;
                throw { message };
            }
        }

        throw { message: 'invalid token!', status: 401 };
    }

}

module.exports = new AuthService();
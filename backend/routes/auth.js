import jwt from 'jsonwebtoken'


function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({
            msg: "Not valid form of token"
        });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);

        if (!decoded) {
            return res.status(403).json({
                msg: "not decoded"
            })
        }

        req.userId = decoded.userID;

        next();
    }
    catch (err) {
        return res.status(403).json({
            msg: "auth error"
        });
    }

}
export default auth
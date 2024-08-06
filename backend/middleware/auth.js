import jwt from 'jsonwebtoken'


function auth(req, res, next) {

    const authHeader = req.cookies.access_token

    if (!authHeader) {
        return res.status(403).json({
            msg: "Not valid form of token"
        });
    }


    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_PASSWORD);

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
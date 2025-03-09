import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];;
        if (!token) {
            return res.status(401).json({ message: "Login first" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        req.adarsh = { userId: decoded.id }
        //console.log(req.user);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export { isAuthenticated };


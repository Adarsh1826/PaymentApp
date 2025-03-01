import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Login first" });
        }
        console.log("token part");
        
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        
        req.user = decoded; 

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export { isAuthenticated };


// import jwt from "jsonwebtoken";
// import redisClient from "../services/redis.service.js";


// export const authUser = async (req, res, next) => {
//     try {
//         const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

//         if (!token) {
//             return res.status(401).send({ error: 'Unauthorized User' });
//         }

//         // auth wale middleware me phle to humne token ke liye demand kara
//         // agar toekn nhi mila to whihse return kara dia or agar mil
//         // jata hai to hum check karenge ki kya ye token redis me hai kya
//         // agar ye same token redis me hai iska mtlb ye token se to user logout kr chuka
//         // hai kyuki hmne redis me logout krte samay user token dala tha
//         // or jab user logout kr chuka hai iska mtlb ye purana token hai jo ki
//         // invalid hai to isko niche handle kiya hai
//         const isBlackListed = await redisClient.get(token);

//         if (isBlackListed) {

//             res.cookie('token', '');

//             return res.status(401).send({ error: 'Unauthorized User' });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {

//         console.log(error);

//         res.status(401).send({ error: 'Unauthorized User' });
//     }
// }

import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";


export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

        if (!token) {
            return res.status(401).send({ error: 'Unauthorized User' });
        }

        const isBlackListed = await redisClient.get(token);

        if (isBlackListed) {

            res.cookie('token', '');

            return res.status(401).send({ error: 'Unauthorized User' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {

        console.log(error);

        res.status(401).send({ error: 'Unauthorized User' });
    }
}
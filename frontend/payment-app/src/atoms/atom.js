import { atom, selector } from "recoil";
import axios from "axios";

export const usersDetails = selector({
    key: "userDetails",
    get: async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Invalid Token");
        }
        try {
            const res = await axios.get("https://paymentapp-4-02cn.onrender.com/api/v1/user/usersget", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data.ress; 
        } catch (error) {
            console.error("Error fetching users:", error);
            return [];  
        }
    }
});

export const balanceDetails = selector({
    key:"balanceDetails",
    get:async()=>{
        const token = localStorage.getItem("token")
        if(!token){
            throw new Error("Invalid Token");
        }
        const res = await axios.get("https://paymentapp-4-02cn.onrender.com/api/v1/account/getbalance",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data.balance
    }
})
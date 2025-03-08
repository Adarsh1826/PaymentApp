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
            const res = await axios.get("http://localhost:3000/api/v1/user/usersget", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data.usernames;  // ✅ Extract only usernames
        } catch (error) {
            console.error("Error fetching users:", error);
            return [];  // ✅ Return empty array on error
        }
    }
});

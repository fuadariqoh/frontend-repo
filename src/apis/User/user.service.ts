import { fetchData } from "@/helper/fetch.helper";
import { IUserService } from "./user.inteface";
import { getUser, setUser } from "@/stores/actions";

class UserService implements IUserService {
  async getUser() {
    const userData = await fetchData("/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const parsedData = await userData.json();

    setUser(parsedData);
  }
  async updateUser(data: any) {
    const userData = await fetchData("/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const parsedData = await userData.json();

    setUser(parsedData);
  }

  async login(email: string, password: string) {
    const data = await fetchData("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const parsedData = await data.json();

    localStorage.setItem("token", parsedData.content.token || "");

    // redirect to /
    window.location.href = "/";
  }
}

const userService = new UserService();

export { userService };

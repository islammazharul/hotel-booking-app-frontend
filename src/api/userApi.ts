import { LoginFormData } from "@/pages/Login";
import { RegisterFormData } from "@/pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createUser = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  // console.log("register", result);

  if (!response.ok) {
    throw new Error(result.message);
  }
};

// Login
export const Login = async (formData: LoginFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data);
    } else {
      console.error("Login failed:", data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// Validate Token
export const validateToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Token is valid:", data);
    } else {
      console.error("Token validation failed:", data.message);
    }
  } catch (error) {
    console.error("Error during token validation:", error);
  }
};

// export const Login = async (formData: LoginFormData) => {
//   const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   const result = await response.json();
//   console.log(result);
//   if (!response.ok) {
//     throw new Error(result.message);
//   }
//   return result;
// };

// export const validateToken = async () => {
//   const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
//     method: "GET",
//     credentials: "include",
//   });
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("Token invalid");
//   }

//   return response.json();
// };

export const LogOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during log out");
  }
};

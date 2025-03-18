/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormData } from "@/pages/Login";
import { RegisterFormData } from "@/pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createUser = async (formData: RegisterFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to register");
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error("Error during register:", error);
  }
};

export const Login = async (formData: LoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const result = await response.json();
  console.log(result);

  return result;
};

export const validateToken = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json(); // Extract error details
      throw new Error(errorData.message || "Token invalid");
    }

    return await response.json();
  } catch (error) {
    console.error("Token validation failed:", error);
    throw error; // Re-throw to handle it properly where this function is used
  }
};

export const LogOut = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include", // Ensure cookies/session are cleared
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); // Handle non-JSON responses
      throw new Error(errorData.message || "Error during log out");
    }

    console.log("Logged out successfully");
    return await response.json(); // Return meaningful response data
  } catch (error) {
    console.error("Logout failed:", error);
    throw error; // Rethrow for proper handling by the caller
  }
};

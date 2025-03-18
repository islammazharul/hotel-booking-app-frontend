import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.createUser, {
    onSuccess: async () => {
      toast({
        description: "Registration Success!",
      });
      await queryClient.invalidateQueries(["validateToken"]);
      // await queryClient.refetchQueries();
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error.message);
      toast({ description: error.message });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="container flex justify-center items-center mx-auto">
      <Tabs defaultValue="register" className="w-[500px]">
        <form onSubmit={onSubmit}>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">First Name</Label>
                  <Input
                    type="text"
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="current">Last Name</Label>
                  <Input
                    type="text"
                    {...register("lastName", {
                      required: "This field is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    {...register("email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Password</Label>
                  <Input
                    type="password"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Confirm Password</Label>
                  <Input
                    type="password"
                    {...register("confirmPassword", {
                      validate: (val) => {
                        if (!val) {
                          return "This field is required";
                        } else if (watch("password") !== val) {
                          return "Your passwords do no match";
                        }
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
                <p className="text-end text-xs md:text-sm">
                  Are you registered?{" "}
                  <Link
                    to="/login"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Login here
                  </Link>
                </p>
              </CardContent>
              <CardFooter>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  );
};

export default Register;

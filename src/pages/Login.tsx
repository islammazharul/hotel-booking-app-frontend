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
import * as apiClient from "../api/userApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "react-query";

export type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();

  const mutation = useMutation(apiClient.Login, {
    onSuccess: async () => {
      toast({ description: "Login Successful!" });
      await queryClient.invalidateQueries(["validateToken"]);
      navigate(location.state?.from?.pathname || "/");
      // await queryClient.refetchQueries();
    },
    onError: (error: Error) => {
      toast({ description: error.message });
    },
  });

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    mutation.mutate(data);
  });
  return (
    <div className="container flex justify-center items-center mx-auto">
      <Tabs defaultValue="login" className="w-[500px]">
        <form onSubmit={onSubmit}>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
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
                <p className="text-end text-xs md:text-sm">
                  Don't have register?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Register here
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

export default Login;

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Mail, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTheme } from '@/hooks/useTheme';

const formSchema = z.object({
  email: z.string().email('Enter a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
});

const SigninForm = ({
  brandName,
  brandLogo,
  description,
}: {
  brandName: string;
  brandLogo: string;
  description: string;
}) => {
  const { theme, toggleTheme, mounted } = useTheme();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="relative flex min-w-screen min-h-screen items-center justify-center bg-zinc-50 p-4 text-zinc-900 transition-colors dark:bg-[#050505] dark:text-white">
      <div className="absolute top-6 right-6">
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          title={
            theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'
          }
          onClick={toggleTheme}
          className="border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer"
        >
          {mounted && theme === 'dark' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
      <Card className="w-full max-w-md border border-zinc-200 bg-white text-zinc-900 shadow-2xl transition-colors dark:border-white/10 dark:bg-[#0F0F0F] dark:text-white">
        <CardHeader className="space-y-1">
          <div className="flex flex-col items-center gap-3">
            <Image src={brandLogo} alt="logo" width={48} height={48} />
            <div className="text-center">
              <CardTitle className="text-2xl font-semibold text-zinc-900 dark:text-white">
                Sign in to {brandName}
              </CardTitle>
              <CardDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 w-full">
          <Button
            variant="outline"
            className="w-full justify-center border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="mr-2 h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303C33.118,32.161,28.923,35,24,35c-7.18,0-13-5.82-13-13 s5.82-13,13-13c3.313,0,6.316,1.229,8.594,3.236l5.657-5.657C34.046,3.053,29.268,1,24,1C11.85,1,2,10.85,2,23s9.85,22,22,22 c12.15,0,22-9.85,22-22C46,22.659,45.736,21.324,45.254,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.313,0,6.316,1.229,8.594,3.236 l5.657-5.657C34.046,3.053,29.268,1,24,1C15.223,1,7.698,6.076,4.106,13.383L6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,45c4.799,0,9.209-1.835,12.553-4.828l-5.799-4.907C28.596,36.896,26.403,37.8,24,37.8 c-4.867,0-8.992-3.097-10.459-7.402l-6.503,5.017C10.079,40.698,16.529,45,24,45z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-1.635,4.612-6.08,7.917-11.303,7.917 c-4.867,0-8.992-3.097-10.459-7.402l-6.503,5.017C10.079,40.698,16.529,45,24,45c12.15,0,22-9.85,22-22 C46,22.659,45.736,21.324,45.254,20.083z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
            or
            <div className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
          </div>

          <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-100 text-xs uppercase tracking-wide text-zinc-600 transition-colors dark:bg-white/5 dark:text-zinc-300">
                <TabsTrigger
                  value="signin"
                  className="data-[state=active]:bg-white data-[state=active]:text-zinc-900 dark:data-[state=active]:bg-white dark:data-[state=active]:text-black cursor-pointer"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-white data-[state=active]:text-zinc-900 dark:data-[state=active]:bg-white dark:data-[state=active]:text-black cursor-pointer"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signin" className="w-full pt-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              className="border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                            <Button
                              type="button"
                              variant="link"
                              className="px-0 text-sm text-zinc-500 transition-colors dark:text-zinc-400 cursor-pointer"
                            >
                              Forgot your password?
                            </Button>
                          </div>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              className="border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-900/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      <Mail className="h-4 w-4" />
                      Sign in with Email
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="signup" className="w-full pt-4">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              className="border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                          </div>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              className="border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-500 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-900/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                    >
                      <Mail className="h-4 w-4" />
                      Sign up with Email
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1 text-center text-xs text-zinc-500 transition-colors dark:text-zinc-500">
          <span>By signing in, you agree to our</span>
          <Button
            variant="link"
            className="px-1 text-xs text-zinc-900 transition-colors underline-offset-4 dark:text-white"
          >
            Terms of Service
          </Button>
          <span>and</span>
          <Button
            variant="link"
            className="px-1 text-xs text-zinc-900 transition-colors underline-offset-4 dark:text-white"
          >
            Privacy Policy
          </Button>
          <span>.</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SigninForm;

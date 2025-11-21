import SigninForm from './SigninForm';

const page = () => {
  return (
    <div className="flex w-full h-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SigninForm
        brandName="Name"
        brandLogo="/favicon.ico"
        description="Sign in to access your account and use all features"
      />
    </div>
  );
};

export default page;

import { SignupCon } from "@/features/signup/UI/Container/SignupCon";
import { NextPage } from "next";
import Head from "next/head";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>サインアップ</title>
        <meta name="description" content="サインアップ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupCon />
    </>
  );
};

export default Signup;

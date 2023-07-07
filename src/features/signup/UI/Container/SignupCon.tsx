import { FC, FormEvent } from "react";
import { SignupPre } from "../Presentational/SignupPre";

export const SignupCon: FC = () => {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // フォームの送信処理
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // レスポンスの処理
        console.log(await response.json());
      } else {
        // エラーハンドリング
        console.log(await response.json());
      }
    } catch (error) {
      // エラーハンドリング
      console.log(error);
    }
  };

  return <SignupPre {...{ handleSubmit }} />;
};

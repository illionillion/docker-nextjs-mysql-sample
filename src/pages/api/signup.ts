import { NextApiRequest, NextApiResponse } from "next";
import mysql_connection from "@/lib/connection";
import { RowDataPacket } from "mysql2";
// import bcrypt from "bcrypt";
// import argon2 from "argon2";

const saltRounds = 10; // ハッシュ化のコストファクター

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {

    const connection = await mysql_connection();
    
    const { name, email, password } = req.body;

    // パスワードのハッシュ化 // うまくいかない
    // const hashedPassword = bcrypt.hashSync(password, saltRounds);
    // const hashedPassword = await argon2.hash(password);

    try {

      // usersテーブルにデータを挿入
      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      const [results] = await connection.execute(query, [
        name,
        email,
        // hashedPassword,
        password,
      ]);

      const newUser = {
        id: (results as RowDataPacket)?.insertId || 0, // 新しいユーザーのID
        name,
        email,
      };

      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "ユーザーの作成に失敗しました。" });
    }
  } else {
    res.status(405).json({ error: "POST メソッドのみ許可されています。" });
  }
}

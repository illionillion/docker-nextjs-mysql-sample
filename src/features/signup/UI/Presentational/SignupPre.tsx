import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";

interface SignupConProps {
  handleSubmit: (event: FormEvent) => void;
}
export const SignupPre: FC<SignupConProps> = ({ handleSubmit }) => {
  return (
    <Box maxW="md" mx="auto" p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} h="100lvh" justify="center">
          <Text fontSize="3xl">サインアップ</Text>
          <FormControl id="name" isRequired>
            <FormLabel>名前</FormLabel>
            <Input name="name" type="text" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input name="email" type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input name="password" type="password" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            登録する
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

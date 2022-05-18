import { server } from "@/shared/infra/http";

server.listen(process.env.PORT, () =>
  console.log(`Server is running port: ${process.env.PORT}`)
);

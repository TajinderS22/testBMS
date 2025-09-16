
import {prisma} from "@repo/db/client"

export default async function Home() {
  const user= await prisma.users.findFirst();
  return (
    <div>
      username:
      {
        user?.username
      }
      password:
      {user?.password}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button>Get Started</Button>
      <UserButton/>
    </div>
  )
} 

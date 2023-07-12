import { JoinLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth"


export default function RegisterPage() {
  return (
    <JoinLayout>
        <h2>
            <RegisterForm/>
        </h2>
    </JoinLayout>
  )
}

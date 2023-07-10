import { useAuth } from "@/hooks"

export default function HomePage() {
    const data = useAuth();
    console.log(data);

  return (
    <div>
        <h2>Estas en la Home Page</h2>
    </div>
  )
}

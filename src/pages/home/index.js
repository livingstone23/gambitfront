import { useAuth } from "@/hooks"

export default function HomePage() {
    const { user, logout } = useAuth();

    console.log("index home, valor de user: ")
    console.log(user);

  return (
    <div>
        <h2>Estas en la Home Page</h2>
        <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

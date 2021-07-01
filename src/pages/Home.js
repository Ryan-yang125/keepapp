import { useRouter } from "../hooks/useRouter";
export default function App() {
  const router = useRouter();
  return (
    <div>
      Home
      <button onClick={(e) => router.push("/soft")}>About</button>;
    </div>
  );
}

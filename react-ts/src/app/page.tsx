import Button from "./components/button"

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button style={{
        backgroundColor: "blue",
        fontSize: 24,
        color: "white"
      }}/>
    </main>
  );
}
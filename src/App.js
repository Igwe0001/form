import Container from "./Components/Container";

function App() {
  return (
    <div className="grid place-items-center bg-mobileBackground md:bg-desktopBackground w-full h-screen bg-primaryRed overflow-y-scroll md:overflow-hidden">
      <Container />
    </div>
  );
}

export default App;

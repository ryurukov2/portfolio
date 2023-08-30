import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex relative">
        <div className="flex-grow w-10/12">{children}</div>
        <div className="flex w-2/12">
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;

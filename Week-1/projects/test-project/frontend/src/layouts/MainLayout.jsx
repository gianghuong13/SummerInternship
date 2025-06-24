import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


const MainLayout = ({ children }) => {
  return (
    <>
        <Header />
        <div className="layout">
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    </>
  )
}

export default MainLayout
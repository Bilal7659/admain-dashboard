import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'
import PageContent from './Components/PageContent/Pagecontent'
import Footer from './Components/Footer/Footer'
import './App.css';


function App() {
  return (
    <>
    <div className='App'>
     <Header/>
     <div className="pageContent-SideMenu">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
     </div>
     <Footer/>
    </div>
    </>
   
  );
}

export default App;

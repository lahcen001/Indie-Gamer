
import "./globals.css";
import Navbar from "./components/Navbar.jsx";

export default function RootLayout({ children }) {
    return (
      <html>
        <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
          <header>
           <Navbar/>
          </header>
          <main className="grow py-3">{children}</main>

          <footer className="border-t py-3 text-center text-xs">
game data and images courtesy of: <a href="https://rawg.io/">rawg.io</a>
          </footer>
        </body>
      </html>
    );                       
}
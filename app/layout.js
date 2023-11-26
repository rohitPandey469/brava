import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Topbar from "@/components/Topbar/Topbar";
import Semi from "@/components/Semi/Semi";
import Slider from "@/components/Slider/Slider";

export const metadata = {
  title: "brava",
  description: "Lets do it!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navigation />
        <Slider/>
        <Semi/>
        {children}
      </body>
    </html>
  );
}

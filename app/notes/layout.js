import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyNotes",
  description: "Your Personal Notes Assistant",
};

export default function NotesLayout({ children }) {
  return (
  <main className="h-screen w-full bg-slate-200 flex flex-row overflow-hidden">
   {children}
   </main>
  );
}

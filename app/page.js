import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center tracking-wide leading-relaxed p-24">

      <div className="flex flex-col items-center justify-center p-24">
        <h1 className="m-2 text-2xl font-bold">Welcome to MyNotes</h1>
        <h3 className="m-2 font-semibold text-slate-500"> Your Personal Notes Assistant</h3>
        <p className="m-2 text-center">Effortlessly organize your thoughts, tasks, and ideas with MyNotes.Say goodbye to scattered notes and hello to streamlined productivity.Whether you're jotting down meeting minutes, brainstorming project ideas,or simply capturing your thoughts on the go, MyNotes has you covered.</p>
      </div>
      <Link href="/notes">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-sm">
          <span>Get Started</span>
        </button>
      </Link>
    </main>
  );
}

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-slate-600">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl tracking-wide font-bold text-slate-300">Niladri Adhikary.</h1>
        <ul className="flex gap-8 text-slate-400 text-sm tracking-wide">
          <li>About</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Links</li>
        </ul>
      </div>
      <div className="flex items-center">
        <p className="text-slate-400 text-sm tracking-wide">Resume</p>
      </div>
    </nav>
  )
}
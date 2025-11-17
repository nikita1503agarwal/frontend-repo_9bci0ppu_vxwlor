import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Axiom Trade Systems</div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

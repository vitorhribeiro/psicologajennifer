import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MessageCircle, Instagram, Mail, Phone, ArrowRight, Heart, Brain, Users,
  Sparkles, Shield, Sun, HandHeart, Compass, ArrowDown, GraduationCap,
  CloudRain, Smile, Activity, Leaf, Repeat, MoonStar, Quote, Star,
  Menu, X, ChevronRight,
} from "lucide-react";
import jenniferPhoto from "@/assets/jennifer.jpeg";
import otixLogo from "@/assets/logo quadrado sf.png";
import logoImg from "@/assets/Logo.png";

export const Route = createFileRoute("/")({ component: Index });

const WHATSAPP = "https://wa.me/5511956106007?text=Ol%C3%A1%20Jennifer%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";
const INSTAGRAM = "https://instagram.com/psicomjenni";
const EMAIL = "mailto:psi.jenniferyferreira@gmail.com";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#abordagem", label: "Abordagem" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#inicio" className="flex items-center gap-4 group select-none">
            <img src={logoImg} alt="Jennifer Ferreira Logo" className="h-9 md:h-11 w-auto object-contain" />
            <div className="w-px h-10 bg-primary/25 group-hover:bg-primary/50 transition-colors" />
            <div className="text-[10px] leading-[1.3] text-primary font-normal tracking-wide max-w-[100px]">
              Psicologia<br />Cognitiva<br />Comportamental
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4" /> Agendar
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] z-50 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-transparent to-primary/5">
          {/* Header do painel */}
          <div className="h-20 flex items-center justify-between px-6">
            <div className="flex flex-col leading-none pt-2">
              <span className="text-3xl text-primary" style={{ fontFamily: "'Calanthe', cursive", fontWeight: "normal" }}>Jennifer</span>
              <span className="text-3xl text-primary ml-5 -mt-2" style={{ fontFamily: "'Calanthe', cursive", fontWeight: "normal" }}>Ferreira</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
              aria-label="Fechar Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-8 py-8 gap-1">
            <div className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em] mb-4">Navegação</div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-4 border-b border-border/40 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <span>{l.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          {/* CTA & Socials */}
          <div className="mt-auto px-6 pb-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 px-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={EMAIL} aria-label="E-mail" className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            
            <a
              href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[var(--shadow-soft)] w-full"
            >
              <MessageCircle className="w-5 h-5" /> Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function ClinicLineArt() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Minimalist Monstera Potted Plant (Left background) */}
      <svg className="absolute left-[3%] bottom-12 w-40 h-40 md:w-64 md:h-64 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Pot */}
        <path d="M38 85 H62 L65 68 H35 Z" />
        <ellipse cx="50" cy="68" rx="15" ry="1.5" />

        {/* Stems */}
        <path d="M50 68 C48 55, 35 48, 25 46" />
        <path d="M50 68 C52 50, 65 42, 75 40" />
        <path d="M50 68 C50 50, 50 35, 50 18" />
        <path d="M50 68 C47 58, 40 52, 32 54" />
        <path d="M50 68 C53 58, 60 52, 68 54" />

        {/* Monstera Leaf 1 (Left) */}
        <path d="M25 46 C16 43, 14 55, 22 62 C26 66, 31 60, 25 46 Z" />
        <path d="M19 49 L23 52" />
        <path d="M17 55 L22 56" />

        {/* Monstera Leaf 2 (Right) */}
        <path d="M75 40 C84 37, 86 49, 78 56 C74 60, 69 54, 75 40 Z" />
        <path d="M81 43 L77 46" />
        <path d="M83 49 L78 50" />

        {/* Monstera Leaf 3 (Top) */}
        <path d="M50 18 C40 8, 42 28, 50 33 C58 28, 60 8, 50 18 Z" />
        <path d="M44 14 L48 19" />
        <path d="M56 14 L52 19" />
      </svg>

      {/* Elegant Therapy Armchair & Lamp (Center/Right background behind/under the image wrapper) */}
      <svg className="absolute right-[-3%] top-28 w-44 h-44 md:w-72 md:h-72 text-primary opacity-[0.08] md:opacity-[0.14] dark:opacity-[0.04] pointer-events-none -z-10 select-none" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Floor Line */}
        <path d="M15 105 H105" />

        {/* Minimalist Therapy Lounge Chair / Chaise */}
        {/* Backrest */}
        <path d="M45 42 C48 32, 72 32, 75 42 C77 50, 77 75, 75 80 C73 85, 47 85, 45 80 C43 75, 43 50, 45 42 Z" />
        {/* Soft back cushion stitches */}
        <path d="M52 48 H68" />
        <path d="M52 60 H68" />
        <path d="M52 72 H68" />

        {/* Cushion Seat */}
        <path d="M38 78 C45 80, 75 80, 82 78 C85 82, 82 87, 78 89 C70 91, 50 91, 42 89 C38 87, 35 82, 38 78 Z" />

        {/* Left Armrest (Curves outward organically) */}
        <path d="M36 56 C36 50, 40 47, 43 53 C43 65, 43 74, 40 80 C38 76, 36 65, 36 56 Z" />

        {/* Right Armrest */}
        <path d="M84 56 C84 50, 80 47, 77 53 C77 65, 77 74, 80 80 C82 76, 84 65, 84 56 Z" />

        {/* Wooden legs */}
        <path d="M44 90 L38 105" />
        <path d="M76 90 L82 105" />
        <path d="M48 90 L47 98" />
        <path d="M72 90 L73 98" />

        {/* Elegant Floor Lamp next to the chair */}
        <path d="M25 105 V45" /> {/* Lamp pole */}
        <path d="M25 45 C25 40, 32 40, 32 45" /> {/* Lamp arch */}
        <path d="M28 45 L36 45 L38 52 H26 Z" /> {/* Lamp shade */}
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex flex-col pt-24 pb-6 overflow-hidden isolate">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary-soft/40 via-background to-background" />
      <ClinicLineArt />
      <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-20" />
      <div className="mx-auto w-full max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center my-auto">
        <div className="reveal">
          {/* Glassmorphic Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary mb-6 backdrop-blur-sm select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CRP 06/230099</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-muted-foreground font-normal">Atendimento Online</span>
          </div>

          {/* Premium Typographic Hierarchy */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            <span className="text-muted-foreground/80 font-normal font-sans text-lg md:text-xl flex items-center gap-2.5 uppercase tracking-wider mb-2 font-medium">
              Psicóloga Clínica
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
            </span>
            <span className="text-primary block" style={{ fontFamily: "'Calanthe', cursive", fontWeight: "normal", fontSize: "1.2em", lineHeight: "1.2" }}>
              Jennifer Ferreira
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Atendimento psicológico online para adolescentes e jovens adultos,
            com escuta acolhedora e abordagem baseada na Terapia Cognitivo-Comportamental.
          </p>

          {/* Buttons with Premium Interactions */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto">
              <MessageCircle className="w-4 h-4" /> Agendar pelo WhatsApp
            </a>
            <a href="#sobre"
              className="inline-flex justify-center items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
              Conhecer meu trabalho <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Premium Photo Card in an Architectural Arch Frame */}
        <div className="relative reveal max-w-[280px] sm:max-w-sm mx-auto lg:ml-auto mt-8 lg:mt-0">
          {/* Multi-tone soft glow behind */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/25 via-sky-400/10 to-transparent blur-3xl -z-10 animate-pulse duration-3000" />
          
          {/* Portrait Arch Frame Container */}
          <div className="relative rounded-t-[11rem] rounded-b-[2rem] overflow-hidden border border-border/80 bg-gradient-to-b from-card via-primary-soft/40 to-primary-soft shadow-2xl transition-all duration-500 hover:shadow-primary/15 hover:-translate-y-1">
            <img
              src={jenniferPhoto}
              alt="Jennifer Ferreira, psicóloga clínica"
              width={896} height={1152}
              className="w-full h-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700 ease-out z-10"
            />
          </div>

          {/* Frosted Glassmorphism Badge */}
          <div className="absolute -bottom-5 -right-5 bg-background/80 backdrop-blur-md border border-border shadow-xl rounded-2xl px-4 py-3.5 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-primary/30 select-none z-20">
            <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary shadow-inner">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-foreground tracking-tight">Escuta acolhedora</div>
              <div className="text-muted-foreground/90 font-medium">Espaço seguro e ético</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 mt-auto pt-8 flex justify-center">
        <a href="#sobre" className="text-muted-foreground hover:text-primary transition flex items-center gap-2 text-xs">
          <ArrowDown className="w-4 h-4 animate-bounce" /> role para conhecer
        </a>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-12 reveal">
      <div className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl font-semibold text-primary">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function TeaAndBookLineArt() {
  return (
    <svg className="absolute left-[3%] bottom-6 w-32 h-32 md:w-48 md:h-48 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Book base */}
      <path d="M20 75 H80 C84 75, 84 80, 80 80 H20 C16 80, 16 75, 20 75 Z" />
      <path d="M24 75 V68 H76 V75" />
      {/* Tea Cup */}
      <path d="M38 48 H62 L60 68 H40 Z" />
      <path d="M62 54 C67 54, 67 60, 62 60" />
      <ellipse cx="50" cy="48" rx="12" ry="1.5" />
      {/* Steams */}
      <path d="M46 40 Q44 32 48 25" />
      <path d="M50 38 Q52 30 50 22" />
      <path d="M54 40 Q52 32 56 25" />
    </svg>
  );
}

function BrainFlowersLineArt() {
  return (
    <svg className="absolute right-[2%] bottom-6 w-44 h-44 md:w-72 md:h-72 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Brain contour */}
      <path d="M40 80 C30 80, 20 70, 20 55 C20 40, 32 30, 45 32 C50 25, 65 20, 75 25 C85 20, 95 30, 95 45 C95 50, 98 55, 96 62 M40 80 C45 80, 52 82, 55 88 C58 92, 62 92, 65 88 C68 82, 75 80, 80 80 C88 80, 95 72, 95 62" />
      <path d="M38 52 C32 50, 30 60, 38 65" />
      <path d="M60 45 C65 35, 75 42, 65 52" />
      <path d="M68 62 C78 60, 82 70, 68 75" />
      <path d="M48 65 Q58 68 52 75" />

      {/* Flowers growing from brain */}
      <path d="M75 25 Q78 10 82 5" />
      <path d="M82 5 C86 2, 88 12, 82 12 C76 12, 78 2, 82 5 Z" />
      <path d="M65 20 Q55 8 48 6" />
      <path d="M48 6 C42 4, 46 14, 50 14 C54 14, 54 4, 48 6 Z" />
      <path d="M85 20 Q98 12 105 10" />
      <path d="M105 10 C108 8, 112 18, 105 18 C98 18, 102 8, 105 10 Z" />
    </svg>
  );
}

function HandsHeartLineArt() {
  return (
    <svg className="absolute right-[3%] bottom-6 w-40 h-40 md:w-60 md:h-60 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Left Hand */}
      <path d="M25 65 Q35 60 42 62 Q45 63 48 58 Q42 50 35 55 C28 60, 22 55, 28 45 Q35 35 48 48" />
      {/* Right Hand */}
      <path d="M75 65 Q65 60 58 62 Q55 63 52 58 Q58 50 65 55 C72 60, 78 55, 72 45 Q65 35 52 48" />
      {/* Heart / Seedling in center */}
      <path d="M50 48 Q47 38 50 35 Q53 38 50 48 Z" fill="currentColor" className="text-primary/10" />
      <path d="M50 35 C46 30, 42 34, 50 42 C58 34, 54 30, 50 35 Z" />
    </svg>
  );
}

function MonsteraLineArt({ className = "absolute left-[3%] bottom-12 w-40 h-40 md:w-64 md:h-64 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Pot */}
      <path d="M38 85 H62 L65 68 H35 Z" />
      <ellipse cx="50" cy="68" rx="15" ry="1.5" />

      {/* Stems */}
      <path d="M50 68 C48 55, 35 48, 25 46" />
      <path d="M50 68 C52 50, 65 42, 75 40" />
      <path d="M50 68 C50 50, 50 35, 50 18" />
      <path d="M50 68 C47 58, 40 52, 32 54" />
      <path d="M50 68 C53 58, 60 52, 68 54" />

      {/* Monstera Leaf 1 (Left) */}
      <path d="M25 46 C16 43, 14 55, 22 62 C26 66, 31 60, 25 46 Z" />
      <path d="M19 49 L23 52" />
      <path d="M17 55 L22 56" />

      {/* Monstera Leaf 2 (Right) */}
      <path d="M75 40 C84 37, 86 49, 78 56 C74 60, 69 54, 75 40 Z" />
      <path d="M81 43 L77 46" />
      <path d="M83 49 L78 50" />

      {/* Monstera Leaf 3 (Top) */}
      <path d="M50 18 C40 8, 42 28, 50 33 C58 28, 60 8, 50 18 Z" />
      <path d="M44 14 L48 19" />
      <path d="M56 14 L52 19" />
    </svg>
  );
}

function HangingPotLineArt({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Ceiling Rope */}
      <path d="M 50 0 V 30" />
      <path d="M 48 0 V 30" strokeWidth="0.5" />
      <path d="M 52 0 V 30" strokeWidth="0.5" />
      
      {/* Main Knot */}
      <path d="M 48 30 C 45 32, 45 34, 48 36 C 50 38, 52 38, 54 36 C 55 34, 55 32, 52 30 Z" />
      
      {/* Strings to basket */}
      <path d="M 49 35 L 30 60" />
      <path d="M 50 36 L 40 60" />
      <path d="M 50 36 L 60 60" />
      <path d="M 51 35 L 70 60" />

      {/* Basket */}
      <path d="M 28 60 C 28 75, 40 85, 50 85 C 60 85, 72 75, 72 60 Z" />
      <path d="M 25 60 H 75" />
      {/* Basket weaving texture */}
      <path d="M 35 65 L 65 65" strokeDasharray="3 3" />
      <path d="M 40 72 L 60 72" strokeDasharray="3 3" />
      <path d="M 45 79 L 55 79" strokeDasharray="3 3" />

      {/* Bushy leaves at the top of the basket */}
      <path d="M 30 60 C 25 50, 35 45, 40 55 C 45 45, 55 45, 60 55 C 65 45, 75 50, 70 60" />
      <path d="M 35 50 C 35 40, 45 40, 45 50" />
      <path d="M 55 50 C 55 40, 65 40, 65 50" />
      <path d="M 42 55 C 45 45, 55 45, 58 55" />

      {/* Cascading Vine 1 (Left long) */}
      <path d="M 32 60 C 20 80, 25 110, 30 130" />
      {/* Leaves for Vine 1 */}
      <path d="M 28 75 C 18 75, 15 85, 25 85 Z" />
      <path d="M 27 90 C 15 90, 15 100, 25 100 Z" />
      <path d="M 28 105 C 18 105, 15 115, 25 115 Z" />
      <path d="M 29 120 C 20 120, 20 130, 28 130 Z" />
      <path d="M 30 130 C 35 135, 40 130, 35 125 Z" />

      {/* Cascading Vine 2 (Center short) */}
      <path d="M 45 60 C 40 75, 50 85, 45 100" />
      <path d="M 43 70 C 35 70, 35 80, 43 80 Z" />
      <path d="M 47 80 C 55 80, 55 90, 47 90 Z" />
      <path d="M 44 95 C 38 95, 38 105, 45 105 Z" />

      {/* Cascading Vine 3 (Right medium) */}
      <path d="M 68 60 C 80 80, 70 100, 75 115" />
      <path d="M 72 75 C 82 75, 85 85, 75 85 Z" />
      <path d="M 72 90 C 82 90, 85 100, 75 100 Z" />
      <path d="M 74 105 C 84 105, 85 115, 75 115 Z" />
      
      {/* Some extra small leaves near the pot */}
      <path d="M 30 65 C 20 65, 20 75, 30 75 Z" />
      <path d="M 70 65 C 80 65, 80 75, 70 75 Z" />
      <path d="M 55 60 C 65 65, 60 75, 55 70 Z" />
      <path d="M 40 60 C 30 65, 35 75, 40 70 Z" />
    </svg>
  );
}

function ChairLineArt({ className = "absolute right-[5%] top-16 w-48 h-48 md:w-80 md:h-80 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Floor Line */}
      <path d="M15 105 H105" />

      {/* Minimalist Therapy Lounge Chair / Chaise */}
      {/* Backrest */}
      <path d="M45 42 C48 32, 72 32, 75 42 C77 50, 77 75, 75 80 C73 85, 47 85, 45 80 C43 75, 43 50, 45 42 Z" />
      {/* Soft back cushion stitches */}
      <path d="M52 48 H68" />
      <path d="M52 60 H68" />
      <path d="M52 72 H68" />

      {/* Cushion Seat */}
      <path d="M38 78 C45 80, 75 80, 82 78 C85 82, 82 87, 78 89 C70 91, 50 91, 42 89 C38 87, 35 82, 38 78 Z" />

      {/* Left Armrest */}
      <path d="M36 56 C36 50, 40 47, 43 53 C43 65, 43 74, 40 80 C38 76, 36 65, 36 56 Z" />

      {/* Right Armrest */}
      <path d="M84 56 C84 50, 80 47, 77 53 C77 65, 77 74, 80 80 C82 76, 84 65, 84 56 Z" />

      {/* Wooden legs */}
      <path d="M44 90 L38 105" />
      <path d="M76 90 L82 105" />
      <path d="M48 90 L47 98" />
      <path d="M72 90 L73 98" />

      {/* Elegant Floor Lamp next to the chair */}
      <path d="M25 105 V45" />
      <path d="M25 45 C25 40, 32 40, 32 45" />
      <path d="M28 45 L36 45 L38 52 H26 Z" />
    </svg>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-surface relative isolate overflow-hidden">
      <TeaAndBookLineArt />
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <SectionTitle eyebrow="Sobre" title="Um espaço seguro para o seu cuidado emocional" />
        </div>
        <div className="md:col-span-3 reveal">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Jennifer Ferreira é psicóloga clínica, registrada no <strong className="text-primary">CRP 06/230099</strong>,
            dedicada ao cuidado emocional de adolescentes e jovens adultos.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Seu trabalho é voltado para oferecer um espaço seguro de escuta, acolhimento e desenvolvimento pessoal,
            auxiliando cada paciente a compreender seus pensamentos, emoções e comportamentos.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, label: "Ética e sigilo" },
              { icon: HandHeart, label: "Acolhimento" },
              { icon: Compass, label: "Direcionamento" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Abordagem() {
  const steps = [
    { icon: Brain, title: "Identificar", text: "Reconhecer pensamentos, emoções e comportamentos que impactam sua vida." },
    { icon: Sparkles, title: "Compreender", text: "Entender as conexões entre o que você sente, pensa e faz no dia a dia." },
    { icon: Sun, title: "Transformar", text: "Construir estratégias práticas para lidar melhor com desafios emocionais." },
  ];
  return (
    <section id="abordagem" className="py-24 relative isolate overflow-hidden">
      <BrainFlowersLineArt />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Abordagem"
          title="Terapia Cognitivo-Comportamental"
          sub="A TCC é uma abordagem que ajuda o paciente a identificar padrões de pensamento, emoções e comportamentos que impactam sua vida. A partir disso, o processo terapêutico busca construir estratégias práticas para lidar melhor com desafios emocionais, ansiedade, autoestima, relações e momentos de mudança."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="reveal rounded-3xl border border-border bg-card p-8 hover:shadow-[var(--shadow-soft)] hover:border-primary/40 transition">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publico() {
  const items = [
    { icon: GraduationCap, title: "Adolescentes", text: "Acompanhamento sensível para essa fase de transformações." },
    { icon: Users, title: "Jovens adultos", text: "Suporte para escolhas, relações e construção de identidade." },
    { icon: Compass, title: "Em autoconhecimento", text: "Para quem busca se entender melhor e crescer emocionalmente." },
    { icon: Heart, title: "Em conflitos emocionais", text: "Ansiedade, insegurança, baixa autoestima e desafios afetivos." },
  ];
  return (
    <section className="py-24 bg-surface relative isolate overflow-hidden">
      <MonsteraLineArt className="absolute left-[3%] bottom-6 w-40 h-40 md:w-56 md:h-56 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Público atendido" title="Para quem é este espaço" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal rounded-3xl bg-card border border-border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition">
              <div className="w-11 h-11 rounded-2xl bg-primary-soft flex items-center justify-center text-primary mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demandas() {
  const items = [
    { icon: CloudRain, label: "Ansiedade" },
    { icon: Smile, label: "Baixa autoestima" },
    { icon: Compass, label: "Autoconhecimento" },
    { icon: Heart, label: "Conflitos emocionais" },
    { icon: Users, label: "Relacionamentos" },
    { icon: Activity, label: "Estresse" },
    { icon: Repeat, label: "Mudanças de vida" },
    { icon: MoonStar, label: "Dificuldades na juventude" },
  ];
  return (
    <section className="py-24 relative isolate overflow-hidden">
      <HandsHeartLineArt />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Principais demandas" title="Temas que podemos trabalhar juntas" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="reveal flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <div className="w-10 h-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValoresSociais() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-10 md:p-16 shadow-[var(--shadow-soft)]">
          <MonsteraLineArt className="absolute -right-12 -bottom-12 w-48 h-48 md:w-80 md:h-80 text-white opacity-[0.08] md:opacity-[0.12] pointer-events-none z-0 select-none" />
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium mb-6">
              <Leaf className="w-3.5 h-3.5" /> Cuidado acessível
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Vagas com valores sociais disponíveis
            </h2>
            <p className="mt-5 text-primary-foreground/90 leading-relaxed">
              A profissional disponibiliza algumas vagas com valores sociais, buscando tornar o cuidado
              psicológico mais acessível para quem precisa de acompanhamento.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-medium hover:bg-white/95 transition">
              <MessageCircle className="w-4 h-4" /> Consultar disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Atendimento() {
  const steps = [
    "Primeiro contato pelo WhatsApp",
    "Conversa inicial para entender a demanda",
    "Agendamento da sessão online",
    "Início do processo terapêutico",
  ];
  return (
    <section id="atendimento" className="py-24 relative isolate overflow-hidden">
      <TeaAndBookLineArt />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Como funciona" title="O caminho até a primeira sessão" />
        <ol className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <li key={s} className="reveal relative rounded-3xl border border-border bg-card p-6">
              <div className="text-5xl font-semibold text-primary/20 mb-2">0{i + 1}</div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return _cta();
}

function Avaliacoes() {
  const items = [
    {
      name: "Mariana, 22",
      text: "A Jennifer me ajudou a entender minha ansiedade e a lidar com ela no dia a dia. Me sinto mais leve e segura desde que comecei a terapia.",
    },
    {
      name: "Lucas, 19",
      text: "Um espaço sem julgamento, onde finalmente consegui falar sobre o que estava sentindo. A escuta dela é muito acolhedora.",
    },
    {
      name: "Beatriz, 25",
      text: "Profissional ética, atenciosa e muito preparada. As ferramentas da TCC mudaram a forma como eu encaro meus pensamentos.",
    },
    {
      name: "Rafael, 17",
      text: "No início eu estava receoso, mas a Jennifer me deixou super à vontade. Hoje a terapia faz parte do meu cuidado comigo mesmo.",
    },
  ];
  return (
    <section id="avaliacoes" className="py-24 relative isolate overflow-hidden">
      <BrainFlowersLineArt />
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Avaliações"
          title="O que dizem os pacientes"
        />
        <div className="reveal mb-10 flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary-soft/40 p-5">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary-soft flex items-center justify-center text-primary">
            <Shield className="w-5 h-5" />
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            <strong className="text-primary">Consentimento e sigilo profissional:</strong>{" "}
            todos os depoimentos abaixo foram compartilhados de forma voluntária e com
            autorização expressa dos pacientes. Nomes e idades foram alterados para
            preservar a identidade, em conformidade com o Código de Ética Profissional do
            Psicólogo (CFP) e o compromisso com o sigilo terapêutico.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="reveal relative rounded-3xl border border-border bg-card p-8 hover:shadow-[var(--shadow-soft)] hover:border-primary/40 transition"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{t.name}</span>
                <span className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function _cta() {
  return (
    <section id="contato" className="py-24 bg-surface relative isolate overflow-hidden">
      <ChairLineArt className="absolute left-[5%] bottom-6 w-36 h-36 md:w-60 md:h-60 text-primary opacity-[0.12] md:opacity-[0.22] dark:opacity-[0.06] pointer-events-none -z-10 select-none" />
      <div className="mx-auto max-w-4xl px-6 text-center reveal">
        <h2 className="text-3xl md:text-5xl font-semibold text-primary leading-tight">
          Dê o primeiro passo para cuidar da sua saúde emocional.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
          Entre em contato pelo WhatsApp e agende sua sessão online com Jennifer Ferreira.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-soft)]">
          <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
        </a>
        <div className="mt-10 flex justify-center gap-3">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={EMAIL} aria-label="E-mail"
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
            <Mail className="w-5 h-5" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TermosModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Termos de Uso</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mt-2">
          <p>
            Ao utilizar este site, você concorda com os presentes Termos de Uso. O conteúdo
            disponibilizado tem finalidade exclusivamente informativa e não substitui o
            atendimento psicológico presencial ou online.
          </p>
          <p>
            As informações fornecidas neste site são de caráter geral e não devem ser
            interpretadas como diagnóstico, prescrição ou tratamento de qualquer condição
            de saúde mental.
          </p>
          <p>
            Este site é operado por <strong className="text-foreground">Jennifer Ferreira</strong>,
            psicóloga registrada no CRP 06/230099. Todo o conteúdo está protegido por
            direitos autorais e não pode ser reproduzido sem autorização prévia.
          </p>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso
            continuado do site após alterações implica aceitação das novas condições.
          </p>
          <p className="text-xs text-muted-foreground/60">Última atualização: maio de {new Date().getFullYear()}.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PrivacidadeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Política de Privacidade</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mt-2">
          <p>
            A sua privacidade é importante para nós. Esta política descreve como coletamos,
            usamos e protegemos as informações fornecidas ao entrar em contato por meio deste site.
          </p>
          <p>
            <strong className="text-foreground">Dados coletados:</strong> Ao entrar em contato
            via WhatsApp, Instagram ou e-mail, podemos coletar seu nome, número de telefone
            e informações que você voluntariamente compartilhar.
          </p>
          <p>
            <strong className="text-foreground">Uso dos dados:</strong> As informações coletadas
            são utilizadas exclusivamente para fins de agendamento e comunicação terapêutica,
            em conformidade com o Código de Ética Profissional do Psicólogo (CFP).
          </p>
          <p>
            <strong className="text-foreground">Sigilo profissional:</strong> Todo conteúdo
            compartilhado no contexto terapêutico é protegido pelo sigilo profissional,
            conforme determina a Resolução CFP nº 10/2005.
          </p>
          <p>
            Não compartilhamos seus dados com terceiros sem sua autorização expressa,
            exceto quando exigido por lei.
          </p>
          <p className="text-xs text-muted-foreground/60">Última atualização: maio de {new Date().getFullYear()}.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Footer() {
  const [termosOpen, setTermosOpen] = useState(false);
  const [privacidadeOpen, setPrivacidadeOpen] = useState(false);
  return (
    <>
      <TermosModal open={termosOpen} onClose={() => setTermosOpen(false)} />
      <PrivacidadeModal open={privacidadeOpen} onClose={() => setPrivacidadeOpen(false)} />
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-0 md:h-14 flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-4 text-center md:text-left">
          {/* Left — copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-muted-foreground order-3 md:order-1">
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
              <span>© {new Date().getFullYear()} Otix Landing.</span>
            </div>
            <span className="hidden md:inline">Todos os direitos reservados.</span>
            <span className="md:hidden">Todos os direitos reservados.</span>
          </div>

          {/* Center — links */}
          <nav className="flex items-center justify-center gap-5 text-xs text-muted-foreground order-1 md:order-2">
            <button onClick={() => setTermosOpen(true)} className="flex items-center gap-1.5 hover:text-primary transition">
              <Shield className="w-3.5 h-3.5" /> Termos
            </button>
            <button onClick={() => setPrivacidadeOpen(true)} className="flex items-center gap-1.5 hover:text-primary transition">
              <Shield className="w-3.5 h-3.5" /> Privacidade
            </button>
          </nav>

          {/* Right — crafted badge + instagram */}
          <div className="flex items-center justify-center md:justify-end gap-3 order-2 md:order-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              <img src={otixLogo} alt="Otix" className="w-6 h-6 rounded-sm object-cover" />
              Crafted by Otix
            </div>
            <a
              href="https://instagram.com/otixlanding"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Otix"
              className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition shrink-0"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping duration-1000" />
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

function Preloader() {
  const [step, setStep] = useState(0);
  const [removed, setRemoved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Calcular largura da barra de rolagem
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Bloquear rolagem e compensar espaço da barra
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      const header = document.querySelector('header');
      if (header) header.style.paddingRight = `${scrollbarWidth}px`;
    }
    
    // Passo 1: Mudar de "Jennifer Ferreira" para "Psicologia Cognitiva"
    const t1 = setTimeout(() => setStep(1), 2500);
    
    // Passo 2: Engolir o texto pela barra e centralizar o logo
    const t2 = setTimeout(() => setStep(2), 5000);
    
    // Passo 3: Começar o fade-out de todo o preloader
    const t3 = setTimeout(() => setStep(3), 6500);
    
    // Passo 4: Remover da DOM e liberar rolagem
    const t4 = setTimeout(() => {
      setRemoved(true);
      document.body.style.overflow = ""; 
      document.body.style.paddingRight = "";
      const header = document.querySelector('header');
      if (header) header.style.paddingRight = "";
    }, 8000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      const header = document.querySelector('header');
      if (header) header.style.paddingRight = "";
    };
  }, []);

  if (removed) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden transition-all duration-[1.5s] ease-in-out ${
        step === 3 ? "opacity-0 pointer-events-none blur-xl scale-105" : "opacity-100 blur-0 scale-100"
      }`}
    >
      {/* Background Decor - Hanging Plant (Top Left) */}
      <HangingPotLineArt 
        className="absolute left-0 md:left-12 top-0 w-48 h-72 md:w-[400px] md:h-[600px] text-primary pointer-events-none opacity-[0.05] md:opacity-[0.08]" 
      />

      {/* Background Decor - Chair Line Art (Bottom Right) */}
      <ChairLineArt 
        className="absolute -right-8 -bottom-8 w-64 h-64 md:w-[450px] md:h-[450px] text-primary pointer-events-none opacity-[0.05] md:opacity-[0.08]" 
      />

      {/* Main Content */}
      <div className={`flex flex-row items-center justify-center relative z-10 w-full px-2 transition-all duration-[1.5s] ease-in-out`}>
        
        {/* Logo */}
        <div className={`flex flex-row items-center justify-end transition-all duration-[1.5s] ease-in-out flex-shrink-0 ${
          step >= 2 
            ? "w-[64px] md:w-[96px] pr-0 opacity-100 scale-110" 
            : (mounted ? "w-[76px] sm:w-[84px] md:w-[128px] pr-3 sm:pr-5 md:pr-8 opacity-100 scale-100" : "w-[76px] sm:w-[84px] md:w-[128px] pr-3 sm:pr-5 md:pr-8 opacity-0 scale-90")
        }`}>
          <img 
            src={logoImg} 
            alt="Logo Jennifer Ferreira" 
            className="h-16 md:h-24 w-auto object-contain drop-shadow-sm" 
          />
        </div>

        {/* Divider (Always vertical now) */}
        <div 
          className={`w-px bg-primary/30 transition-all duration-1000 ease-in-out flex-shrink-0 origin-center ${
            step >= 2 ? "h-20 md:h-24 opacity-0 scale-y-0" : (mounted ? "h-20 md:h-24 opacity-100 scale-y-100 delay-500" : "h-20 md:h-24 opacity-0 scale-y-0")
          }`} 
        />

        {/* Text Area */}
        <div 
          className={`relative flex flex-col justify-center flex-shrink-0 overflow-hidden transition-all duration-[1.5s] ease-in-out ${
            step >= 2 ? "w-0 opacity-0" : "w-[140px] sm:w-[150px] md:w-[190px] opacity-100"
          } h-32 md:h-48`}
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16px, black 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 16px, black 100%)"
          }}
        >
          
          {/* State 0: Jennifer Ferreira (Cursive) */}
          <div 
            className={`absolute inset-y-0 left-0 w-full flex flex-col justify-center items-start pl-3 sm:pl-5 md:pl-8 transition-all duration-1000 ease-in-out ${
              step === 0 
                ? (mounted ? "opacity-100 translate-y-0 translate-x-0 delay-700" : "opacity-0 translate-y-4 md:translate-y-6 translate-x-0") 
                : "opacity-0 -translate-y-4 md:-translate-y-6 translate-x-0 pointer-events-none"
            }`}
          >
            <span className="text-[2.2rem] md:text-[2.8rem] text-primary leading-none" style={{ fontFamily: "'Calanthe', cursive", fontWeight: "normal" }}>Jennifer</span>
            <span className="text-[2.2rem] md:text-[2.8rem] text-primary ml-3 md:ml-6 -mt-2 md:-mt-3 leading-none" style={{ fontFamily: "'Calanthe', cursive", fontWeight: "normal" }}>Ferreira</span>
          </div>

          {/* State 1: Terapia Cognitiva */}
          <div 
            className={`absolute inset-y-0 left-0 w-full flex flex-col justify-center items-start text-left pl-3 sm:pl-5 md:pl-8 transition-all duration-1000 ease-in-out ${
              step === 1 
                ? "opacity-100 translate-x-0 translate-y-0 delay-300" 
                : step === 0 
                  ? "opacity-0 translate-x-0 translate-y-4 md:translate-y-6 pointer-events-none" 
                  : "opacity-0 -translate-x-8 md:-translate-x-12 translate-y-0 pointer-events-none"
            }`}
          >
            <span className="text-[11px] md:text-[17px] font-bold text-primary uppercase tracking-[0.2em] md:tracking-[0.25em] leading-[1.3] md:leading-[1.4] drop-shadow-sm">Psicologia</span>
            <span className="text-[9px] md:text-[13px] font-medium text-primary/70 uppercase tracking-[0.15em] md:tracking-[0.2em] leading-[1.3] md:leading-[1.4]">Cognitiva</span>
            <span className="text-[9px] md:text-[13px] font-medium text-primary/70 uppercase tracking-[0.15em] md:tracking-[0.2em] leading-[1.3] md:leading-[1.4]">Comportamental</span>
          </div>

        </div>
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Abordagem />
        <Publico />
        <Demandas />
        <ValoresSociais />
        <Atendimento />
        <Avaliacoes />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

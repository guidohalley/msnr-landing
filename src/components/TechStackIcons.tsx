"use client";
import { SiAdobeaftereffects, SiAdobepremierepro, SiDavinciresolve, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiCanva, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAmazonwebservices, SiVercel, SiFacebook, SiGoogleads, SiGoogleanalytics, SiMailchimp, SiZapier, SiNotion, SiSlack, SiTrello, SiWordpress, SiN8N } from "react-icons/si";

const techStack = [
  { name: "Adobe After Effects", color: "#D291FF", icon: SiAdobeaftereffects },
  { name: "Adobe Premiere Pro", color: "#A3A1F7", icon: SiAdobepremierepro },
  { name: "DaVinci Resolve", color: "#1A1A1A", icon: SiDavinciresolve },
  { name: "Adobe Illustrator", color: "#FF9A00", icon: SiAdobeillustrator },
  { name: "Adobe Photoshop", color: "#31A8FF", icon: SiAdobephotoshop },
  { name: "Figma", color: "#A259FF", icon: SiFigma },
  { name: "Canva", color: "#00C4CC", icon: SiCanva },
  { name: "Next.js", color: "#000", icon: SiNextdotjs },
  { name: "React", color: "#61DAFB", icon: SiReact },
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  { name: "Tailwind CSS", color: "#38BDF8", icon: SiTailwindcss },
  { name: "AWS", color: "#FF9900", icon: SiAmazonwebservices },
  { name: "Vercel", color: "#000", icon: SiVercel },
  { name: "Meta Ads", color: "#4267B2", icon: SiFacebook },
  { name: "Google Ads", color: "#34A853", icon: SiGoogleads },
  { name: "Google Analytics", color: "#FABB05", icon: SiGoogleanalytics },
  { name: "Mailchimp", color: "#FFE01B", icon: SiMailchimp },
  { name: "Zapier", color: "#FF4A00", icon: SiZapier },
  { name: "Notion", color: "#000", icon: SiNotion },
  { name: "Slack", color: "#611F69", icon: SiSlack },
  { name: "Trello", color: "#0079BF", icon: SiTrello },
  { name: "WordPress", color: "#21759B", icon: SiWordpress },
  { name: "n8n", color: "#FF4A00", icon: SiN8N },
];

export default function TechStackIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 md:gap-6 ${className}`}>
      {techStack.map((tech) => (
        <span
          key={tech.name}
          className="inline-flex items-center justify-center px-0 py-0 rounded-full shadow bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:scale-110 hover:shadow-lg transition-transform duration-200"
          style={{ color: tech.color, borderColor: tech.color, width: '2.7rem', height: '2.7rem' }}
          title={tech.name}
        >
          <tech.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: tech.color }} />
        </span>
      ))}
    </div>
  );
}

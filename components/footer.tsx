import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  navegacao: [
    { href: "/", label: "Início" },
    { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
    { href: "/servicos", label: "Serviços" },
    { href: "/quem-somos", label: "Quem Somos" },
  ],
  servicos: [
    { href: "/diferenciais", label: "Diferenciais" },
    { href: "/clientes-depoimentos", label: "Clientes" },
    { href: "/contato", label: "Contato" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-midnight text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-brand-purple font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold">Nexa Social</span>
            </div>
            <p className="text-brand-pink text-sm leading-relaxed">
              Conexões que transformam! Consultoria especializada em gestão
              social, sustentabilidade e investimento social privado.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-pink hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-pink hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:luizadcaracek@gmail.com"
                  className="flex items-center gap-2 text-brand-pink hover:text-brand-orange transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">luizadcaracek@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5547988185277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-pink hover:text-brand-orange transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(47) 98818-5277</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-pink text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Jaraguá do Sul, SC - Atuação Nacional</span>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-purple hover:bg-brand-orange transition-colors flex items-center justify-center"
                aria-label="LinkedIn da Nexa Social"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-purple hover:bg-brand-orange transition-colors flex items-center justify-center"
                aria-label="Instagram da Nexa Social"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-purple/30 mt-12 pt-8 text-center">
          <p className="text-brand-pink text-sm">
            &copy; {new Date().getFullYear()} Nexa Social. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

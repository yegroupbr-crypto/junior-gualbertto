
'use client';

import {
  MessageCircle,
  Instagram,
  Globe,
  MapPin,
  Phone,
  Briefcase,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561998166292', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/juniorgualbertto_', '_blank');
  };

  const handleWebsiteClick = () => {
    alert('Site em breve!');
  };

  const handleMapClick = () => {
    window.open(
      'https://maps.google.com/?q=Conect+Towers+QS+01,+sala+639+Águas+Claras+Brasília+DF',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950 relative font-sans overflow-x-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-slate-900/60 to-amber-900/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,83,9,0.08),transparent_50%)]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-16">
        {/* Profile Section */}
        <div
          style={{ animationFillMode: 'both' }}
          className="text-center mb-12 animate-fade-in-up"
        >
          <div className="relative inline-block mb-10 transition-transform duration-300 hover:scale-105">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-800 via-slate-800 to-amber-800 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <Image
                src="https://i.ibb.co/yBqQyLx5/profile.jpg"
                width={128}
                height={128}
                alt="Foto do Perfil"
                className="object-cover"
                data-ai-hint="profile picture"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl border-3 border-slate-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-3xl font-black text-white mb-4 tracking-tight">
            Junior Gualbertto
          </h1>
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 mb-8">
            <Briefcase size={22} className="text-amber-400" />
            <p className="text-base font-semibold text-slate-200">
              Consultor especializado em financiamento e consórcio de imóveis
            </p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed px-2 font-medium max-w-sm mx-auto">
            Encontre o financiamento e consórcio ideal <br className="sm:hidden" /> para seu imóvel. São mais de 40 bancos com alternativas exclusivas. Simule já pelo WhatsApp&nbsp;📲
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{ animationFillMode: 'both', animationDelay: '200ms' }}
          className="space-y-4 mb-12 animate-fade-in-up"
        >
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between border border-emerald-500/20"
          >
            <div className="flex items-center gap-4">
              <MessageCircle
                size={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <div className="text-lg font-bold">WhatsApp</div>
                <div className="text-sm opacity-90 font-medium">
                  +55 61 99816-6292
                </div>
              </div>
            </div>
            <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
          </button>

          {/* Instagram Button */}
          <button
            onClick={handleInstagramClick}
            className="group w-full bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between border border-purple-500/20"
          >
            <div className="flex items-center gap-4">
              <Instagram
                size={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <div className="text-lg font-bold">Instagram</div>
                <div className="text-sm opacity-90 font-medium">
                  @juniorgualbertto_
                </div>
              </div>
            </div>
            <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
          </button>

          {/* Site Button */}
          <button
            onClick={handleWebsiteClick}
            className="group w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between border border-blue-500/20"
          >
            <div className="flex items-center gap-4">
              <Globe
                size={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <div className="text-lg font-bold">Site</div>
                <div className="text-sm opacity-90 font-medium">Em breve</div>
              </div>
            </div>
            <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Contact Information */}
        <div
          style={{ animationFillMode: 'both', animationDelay: '400ms' }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-white/10 animate-fade-in-up"
        >
          <h3 className="text-xl font-black text-white mb-8 text-center">
            Informações de Contato
          </h3>

          {/* Address */}
          <button
            onClick={handleMapClick}
            className="group w-full text-left p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 mb-6 border border-white/10 hover:border-white/20 transform hover:-translate-y-1"
          >
            <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl transition-transform duration-300 group-hover:scale-105">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-white text-base mb-1">
                Escritório
              </div>
              <div className="text-slate-300 font-medium text-sm leading-relaxed">
                Conect Towers QS 01, sala 639, Águas Claras - Brasília/DF
              </div>
              <div className="text-xs text-amber-400 mt-2 font-semibold group-hover:text-amber-300 transition-colors duration-300 group-hover:translate-x-1">
                Ver no mapa →
              </div>
            </div>
          </button>

          {/* Phone */}
          <div className="p-6 rounded-xl bg-white/5 flex items-center gap-4 border border-white/10">
            <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Telefone</div>
              <div className="text-slate-300 font-medium text-sm">
                +55 61 99816-6292
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{ animationFillMode: 'both', animationDelay: '800ms' }}
          className="text-center text-slate-400 font-medium animate-fade-in-up"
        >
          <p className="text-xs">
            © 2025 Junior Gualbertto - Consultoria Imobiliária
          </p>
        </div>
      </div>
    </div>
  );
}

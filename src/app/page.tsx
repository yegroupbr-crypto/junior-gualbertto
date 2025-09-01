'use client';

import {
  MessageCircle,
  Instagram,
  Globe,
  MapPin,
  Phone,
  Briefcase,
  Star,
  Award,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950 relative font-sans">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-slate-900/60 to-amber-900/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,83,9,0.08),transparent_50%)]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-10">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-800 via-slate-800 to-amber-800 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <Image
                src="https://picsum.photos/128/128"
                width={128}
                height={128}
                alt="Foto do Perfil"
                className="object-cover"
                data-ai-hint="profile picture"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl border-3 border-slate-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
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
            Encontre o financiamento e consórcio ideal para seu imóvel. São mais de 40 bancos com alternativas exclusivas. Simule já pelo WhatsApp 📲
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-16">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-emerald-500/20"
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
            className="group w-full bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-purple-500/20"
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

          {/* Website Button */}
          <button
            onClick={handleWebsiteClick}
            className="group w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-between border border-blue-500/20"
          >
            <div className="flex items-center gap-4">
              <Globe
                size={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <div className="text-lg font-bold">Website</div>
                <div className="text-sm opacity-90 font-medium">Em breve</div>
              </div>
            </div>
            <div className="w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-white/10">
          <h3 className="text-xl font-black text-white mb-8 text-center">
            Informações de Contato
          </h3>

          {/* Address */}
          <button
            onClick={handleMapClick}
            className="group w-full text-left p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 mb-6 border border-white/10 hover:border-white/20 transform hover:scale-[1.01]"
          >
            <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-white text-base mb-1">
                Escritório
              </div>
              <div className="text-slate-300 font-medium text-sm leading-relaxed">
                Conect Towers QS 01, sala 639
                <br />
                Águas Claras - Brasília/DF
              </div>
              <div className="text-xs text-amber-400 mt-2 font-semibold group-hover:text-amber-300 transition-colors">
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

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-amber-700/80 to-amber-800/80 backdrop-blur-xl rounded-2xl p-8 text-center text-white shadow-xl border border-amber-600/20 mb-8 hover:from-amber-600/80 hover:to-amber-700/80 transition-all duration-500">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <Award size={28} className="text-amber-200" />
            </div>
          </div>
          <h3 className="text-xl font-black mb-4 text-white">
            Pronto para realizar seu sonho?
          </h3>
          <p className="text-amber-100 font-medium mb-8 leading-relaxed text-sm">
            Entre em contato e descubra as melhores opções de financiamento e consórcio para
            você
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group bg-white hover:bg-slate-50 text-amber-800 font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-amber-200/20"
          >
            <span className="text-base">Consulta Gratuita</span>
            <MessageCircle
              size={18}
              className="inline ml-2 group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 font-medium">
          <p className="text-xs">
            © 2025 Junior Gualbertto - Consultoria Imobiliária
          </p>
        </div>
      </div>
    </div>
  );
}

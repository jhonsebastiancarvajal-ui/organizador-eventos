import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlusCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export function CrearEventoView() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate event creation and redirect
    navigate('/hoy');
  };

  return (
    <div className="pb-12">
      {/* Header */}
      <header className="pt-8 pb-6 border-b border-white/5 bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-slate-400 hover:text-white mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          
          <div>
            <h1 className="text-4xl font-outfit font-bold tracking-tight text-white mb-2">
              Crear Nuevo Evento
            </h1>
            <p className="text-slate-400">
              Completa los detalles a continuación para registrar un nuevo evento en tu agenda.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content (Form) */}
      <main className="max-w-3xl mx-auto px-6 pt-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* General Information Section */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-xl font-outfit font-semibold text-white mb-6">Información General</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Título del Evento *</label>
                <input 
                  type="text" 
                  placeholder="Ej. Boda García-López"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Descripción</label>
                <textarea 
                  rows="3"
                  placeholder="Detalles adicionales sobre el evento..."
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
            </div>
          </section>

          {/* Date & Location Section */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-xl font-outfit font-semibold text-white mb-6">Cuándo y Dónde</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Fecha *</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Horario *</label>
                <input 
                  type="time" 
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Ubicación</label>
                <input 
                  type="text" 
                  placeholder="Ej. Salón Principal, Hotel Plaza"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </section>

          {/* Additional Details */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <h2 className="text-xl font-outfit font-semibold text-white mb-6">Detalles Adicionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Presupuesto Estimado</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Invitados Estimados</label>
                <input 
                  type="number" 
                  placeholder="Ej. 150"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-slate-300 hover:text-white"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:scale-105"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Guardar Evento
            </Button>
          </div>
          
        </form>
      </main>
    </div>
  );
}

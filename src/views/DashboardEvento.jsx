import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export function DashboardEvento() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data to simulate fetching event details based on the ID
  const eventDetails = {
    id: id,
    title: 'Evento Principal (Simulado)',
    description: 'Esta es la información detallada del evento que seleccionaste. Aquí puedes ver todos los datos relacionados, gestionar el equipo y revisar el presupuesto.',
    date: '16 Septiembre 2026',
    time: '14:00 PM - 20:00 PM',
    location: 'Salón Principal, Hotel Plaza',
    attendees: '250 Invitados',
    status: 'En progreso',
    budget: '$15,000 USD'
  };

  return (
    <div className="pb-12">
      {/* Header */}
      <header className="pt-8 pb-6 border-b border-white/5 bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="text-slate-400 hover:text-white mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  {eventDetails.status}
                </span>
                <span className="text-slate-500 text-sm">ID: #{eventDetails.id}</span>
              </div>
              <h1 className="text-4xl font-outfit font-bold tracking-tight text-white mb-2">
                {eventDetails.title}
              </h1>
            </div>
            
            <Button className="rounded-full bg-white text-black hover:bg-slate-200">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Marcar Completado
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column (Info) */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-outfit font-semibold text-white mb-4">Detalles del Evento</h2>
              <p className="text-slate-400 leading-relaxed">
                {eventDetails.description}
              </p>
            </section>
            
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-xl font-outfit font-semibold text-white mb-4">Agenda y Tareas</h2>
              <div className="text-slate-500 italic text-sm text-center py-8">
                Aquí se mostraría la lista de tareas específicas de este evento.
              </div>
            </section>
          </div>
          
          {/* Right Column (Sidebar) */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-6">
              <h3 className="text-lg font-outfit font-semibold text-white">Resumen</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Fecha</p>
                    <p className="text-slate-400">{eventDetails.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-slate-400">{eventDetails.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-slate-400">{eventDetails.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-sm">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Asistencia</p>
                    <p className="text-slate-400">{eventDetails.attendees}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-sm font-medium text-primary mb-1">Presupuesto Asignado</h3>
              <p className="text-3xl font-outfit font-bold text-white">{eventDetails.budget}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

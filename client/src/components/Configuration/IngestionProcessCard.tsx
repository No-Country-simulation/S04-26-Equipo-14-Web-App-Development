export const IngestionProcessCard = () => {
  return (
    <div className="lg:col-span-2 bg-surface-container-low p-6 rounded-xl border border-outline-variant">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary">
          analytics
        </span>
        <h2 className="text-headline-md text-on-surface">Proceso de Ingesta</h2>
      </div>
      <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
        El flujo automatizado de recolección ejecuta tareas programadas cada
        viernes a las 00:00 UTC. Obtiene las últimas métricas de talento,
        actualizaciones de repositorios y fuentes de datos. Los datos se limpian
        y se envían a la base de datos principal.
      </p>
      <div className="flex flex-wrap items-center gap-8 border-t border-outline-variant pt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-tertiary"></div>
          <span className="text-label-md text-on-surface">
            Sistema Saludable
          </span>
        </div>
        <div>
          <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">
            Última ejecución
          </p>
          <p className="text-label-md text-on-surface">2023-10-27 00:01 UTC</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-on-surface-variant tracking-widest">
            Próxima programada
          </p>
          <p className="text-label-md text-on-surface">2023-11-03 00:00 UTC</p>
        </div>
      </div>
    </div>
  );
};

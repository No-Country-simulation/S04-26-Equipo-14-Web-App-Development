export const ManualOverrideCard = () => {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col items-center justify-center text-center">
      <span className="material-symbols-outlined text-primary text-5xl mb-4">
        rocket_launch
      </span>
      <h2 className="text-headline-md text-on-surface mb-2">
        Activación Manual
      </h2>
      <p className="text-body-md text-on-surface-variant mb-6">
        Inicia una recolección de datos inmediata fuera del ciclo.
      </p>
      <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
        <span className="material-symbols-outlined text-sm">play_arrow</span>{" "}
        Iniciar Ingesta Manual
      </button>
    </div>
  );
};

export const ConfigurationHeader = () => {
  return (
    <header className="mb-8 flex justify-between items-start">
      <div>
        <h1 className="text-headline-lg text-on-surface font-bold">
          Panel de Recolección de Datos
        </h1>
        <p className="text-body-md text-on-surface-variant">
          Gestiona los ajustes de ingesta y activadores manuales.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 bg-surface-container-high text-on-surface px-4 py-2 rounded-lg border border-outline-variant hover:bg-surface-bright
      transition-colors text-label-md"
        >
          <span className="material-symbols-outlined text-sm">sync</span>{" "}
          Actualizar datos
        </button>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
          notifications
        </span>
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
          <span className="material-symbols-outlined text-sm">person</span>
        </div>
      </div>
    </header>
  );
};

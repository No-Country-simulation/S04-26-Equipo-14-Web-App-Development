export const ConfigurationSettings = () => {
  return (
    <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant">
      <h2 className="text-headline-md text-on-surface mb-8">
        Panel de Configuración
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        {/* COLUMNA 1: AJUSTES DE EXTRACCIÓN */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              folder
            </span>
            <h3 className="text-on-surface font-medium">
              Ajustes de Extracción
            </h3>
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              Puntos de Destino (Separados por coma)
            </label>
            <input
              type="text"
              defaultValue="api.github.com/users, stackoverflow.com/api"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              Límite de Concurrencia
            </label>
            <select
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none appearance-none"
            >
              <option>10 peticiones/seg</option>
              <option>20 peticiones/seg</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              Cadena de Agente de Usuario
            </label>
            <input
              type="text"
              defaultValue="TalentCircleBot/1.0 (+http://talentcircle.com)"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-body-md text-on-surface">
              Activar Rotación de Proxy
            </span>
            <input
              type="checkbox"
              className="w-10 h-5 accent-primary cursor-pointer"
              defaultChecked
            />
          </div>
        </div>

        {/* COLUMNA 2: AJUSTES DE BD */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              database
            </span>
            <h3 className="text-on-surface font-medium">
              Ajustes de Base de Datos
            </h3>
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              URI de la Base de Datos
            </label>
            <input
              type="password"
              defaultValue="mongodb://user:password@cluster.mongodb.net/talent_db"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
                Tamaño de Lote
              </label>
              <input
                type="number"
                defaultValue="1000"
                className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
                Espera (ms)
              </label>
              <input
                type="number"
                defaultValue="30000"
                className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              Resolución de Conflictos
            </label>
            <select
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none appearance-none"
            >
              <option>Actualizar si existe (Upsert)</option>
              <option>Ignorar duplicados</option>
            </select>
          </div>
        </div>

        {/* COLUMNA 3: CLAVES Y SINCRONIZACIÓN */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-4">
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              view_list
            </span>
            <h3 className="text-on-surface font-medium">
              Claves y Sincronización
            </h3>
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              Claves de API
            </label>
            <input
              type="password"
              defaultValue="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] text-on-surface-variant mb-1 uppercase font-bold tracking-tight">
              URL de Sincronización
            </label>
            <input
              type="text"
              defaultValue="https://sync.talentcircle.com/v1"
              className="w-full bg-surface-container-high text-on-surface border border-outline-variant p-3 rounded-lg text-body-md focus:ring-1 focus:ring-primary
       outline-none"
            />
          </div>
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex justify-end gap-4 border-t border-outline-variant pt-8">
        <button className="px-6 py-2 text-on-surface-variant hover:text-on-surface font-medium transition-colors">
          Descartar
        </button>
        <button className="bg-primary text-on-primary px-8 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
          Guardar Configuración
        </button>
      </div>
    </div>
  );
};

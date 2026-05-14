const TopBar = () => {
       return (
         <header className="bg-background text-primary sticky top-0 z-40 flex
      items-center justify-between px-8 py-6 w-full">
           <div>
             <h2 className="text-3xl font-bold text-on-background font-headline-lg">
               Talent Ingestion
             </h2>
            <p className="text-sm text-on-surface-variant mt-1 font-body-md">
              Revisa y aprueba el contenido generado para cada canal.
            </p>
          </div>
   
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:bg-surface-container-high
      p-2 rounded-full transition-all">
              <span className="material-symbols-outlined">sync</span>
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-high
      p-2 rounded-full transition-all relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error
      rounded-full"></span>
            </button>
          </div>
        </header>
      );
    };
   
    export default TopBar;

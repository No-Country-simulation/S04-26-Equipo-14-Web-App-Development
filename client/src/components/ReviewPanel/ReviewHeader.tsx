


type handleSyncProps = {
    handleSync: () => void

}

const ReviewHeader = ({handleSync}: handleSyncProps ) => {


    return (

        <header className="bg-background dark:bg-background text-primary dark:text-primary font-headline-md text-headline-md full-width sticky top-0 z-40 flex items-center justify-between px-margin py-gutter">
            <div>
                <h2 className="text-headline-lg font-headline-lg text-on-background stitch-anim-fade-in">Talent Ingestion</h2>
                <p className="text-body-md font-body-md text-on-surface-variant mt-1">Revisa y aprueba el contenido generado para cada canal.</p>
            </div>
            <div className="flex items-center gap-4">
                <button type="button" onClick={handleSync} className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-all">
                    <span className='material-symbols-outlined'>sync</span>
                </button>
                <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-all relative">
                    <span className='material-symbols-outlined'>notifications</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
                </button>
            </div>
        </header>
    )
}

export default ReviewHeader
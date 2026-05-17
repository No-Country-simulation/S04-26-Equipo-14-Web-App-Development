

const EditPanelTopbar = () => {
    return (

        <header
            className="w-full sticky top-0 z-40 bg-background flex items-center justify-between px-margin py-gutter border-b border-surface-container-high">
            <div className="flex items-center gap-4">
                <h2 className="text-headline-md font-headline-md text-primary">Dashboard de Ingesta</h2>
            </div>
            <div className="flex items-center gap-6">


                <div className="flex items-center gap-2">
                    <button
                        className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all">
                        <span className="material-symbols-outlined">sync</span>
                    </button>
                    <button
                        className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-highest rounded-lg transition-colors font-label-md text-label-md">
                    Actualizar datos
                </button>
                <div
                    className="w-10 h-10 rounded-full bg-surface-container-high border border-outline overflow-hidden flex items-center justify-center">
                    <img alt="Admin User" className="w-full h-full object-cover"
                        data-alt="A close-up portrait of a professional individual serving as an avatar in a dark-themed UI. The lighting is studio-quality with subtle rim lighting that separates the subject from a dark, blurry background. The overall tone is sleek, modern, and serious, fitting a high-performance data dashboard environment."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlQgxH32NOxnuY87KnmEl_cu-qjE-Byq6VN7d4GyxobXcMMnphDTKo_8KZ384wc3Hnx6_Osr5yFSRh-JjXMuBmZU4lVZ1K18i1PcKDTXSXrzvwGY0FJyIf4jHFQ5jgoVong05DYgQ7KUC513da5fTlpzkUHXnwxz1pQYadNrrQn6lu3l7gcNVbYybBQ4q-iaNvLTr1M9U0x7IaBPioTJ9KZ0gyosSmT_agH2QuMoxBy4mZfnZXpY_vkvd1KKIvzltCRXnxIwlu1I5l" />
                </div>
            </div>
        </header>

    )
}

export default EditPanelTopbar
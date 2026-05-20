import { ConfigurationHeader } from "../components/Configuration/ConfigurationHeader";
import { IngestionProcessCard } from "../components/Configuration/IngestionProcessCard";
import { ManualOverrideCard } from "../components/Configuration/ManualOverrideCard";
import { ConfigurationSettings } from "../components/Configuration/ConfigurationSettings";

const Configuration = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 1. Cabecera */}
      <ConfigurationHeader />

      {/* 2. Tarjetas Superiores */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <IngestionProcessCard />
        <ManualOverrideCard />
      </div>

      {/* 3. Panel de Ajustes */}
      <ConfigurationSettings />
    </div>
  );
};

export default Configuration;

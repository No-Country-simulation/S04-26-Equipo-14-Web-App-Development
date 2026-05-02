La idea es compartir entre el front y el back interfaces o types para definir los datos de los campos qe vamos a utlizar

Solo a modo de ejemplo deberiamos tener algo de este estilo:
--------------------------------------------------------------
export interface IPost {
  id: string;
  title: string;
  link: string;
  score: number;           // Votos en Stack Overflow
  answer_count: number;    // Cantidad de respuestas
  relevance_score: number; // Cálculo: score * 0.6 + answer_count * 0.4 [3]
  date: string;
}
-------------------------------------------------------------
xport type DraftType = 'newsletter' | 'linkedin' | 'twitter';
export type DraftStatus = 'draft' | 'edited' | 'approved';

export interface IDraft {
  id: string;
  content: string;         // El texto generado por la IA [6]
  type: DraftType;         // Canal definido [7]
  status: DraftStatus;     // Estado para el flujo del editor [2]
  generatedAt: string;
}
import { Injectable } from '@nestjs/common';
import { PipelineStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PipelineRunsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Genera una etiqueta única para identificar la ejecución semanal.
   * Ejemplo: 2026-W19
   */
  private generateWeekLabel(date = new Date()): string {
    const year = date.getUTCFullYear();

    // Calcular número de semana ISO
    const tempDate = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
    );

    // Ajustar al jueves de la semana actual (regla ISO)
    tempDate.setUTCDate(
      tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7),
    );

    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));

    const weekNumber = Math.ceil(
      ((tempDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
    );

    return `${year}-W${weekNumber.toString().padStart(2, '0')}`;
  }

  /**
   * Crea una nueva ejecución del pipeline con estado "processing".
   * Si ya existe una ejecución para la semana indicada, la devuelve.
   */
  async createPendingRun(weekLabel?: string) {
    const finalWeekLabel = weekLabel ?? this.generateWeekLabel();

    const existingRun = await this.prisma.pipelineRun.findUnique({
      where: {
        weekLabel: finalWeekLabel,
      },
    });

    if (existingRun) {
      return existingRun;
    }

    return this.prisma.pipelineRun.create({
      data: {
        weekLabel: finalWeekLabel,
        status: PipelineStatus.processing,
        modelUsed: 'llama-3.3-70b-versatile',
        promptVersion: 'v1',
      },
    });
  }

  /**
   * Alias mantenido por compatibilidad con versiones anteriores.
   */
  async createRun() {
    return this.createPendingRun();
  }

  /**
   * Marca la ejecución como completada.
   */
  async markAsCompleted(
    pipelineRunId: string,
    modelUsed?: string,
    inputTokens?: number,
    outputTokens?: number,
  ) {
    return this.prisma.pipelineRun.update({
      where: {
        id: pipelineRunId,
      },
      data: {
        status: PipelineStatus.completed,
        completedAt: new Date(),
        modelUsed,
        inputTokens,
        outputTokens,
      },
    });
  }

  /**
   * Alias mantenido por compatibilidad con versiones anteriores.
   */
  async markCompleted(
    pipelineRunId: string,
    inputTokens?: number,
    outputTokens?: number,
  ) {
    return this.markAsCompleted(
      pipelineRunId,
      undefined,
      inputTokens,
      outputTokens,
    );
  }

  /**
   * Marca la ejecución como fallida y guarda el mensaje de error.
   */
  async markAsFailed(pipelineRunId: string, errorMessage: string) {
    return this.prisma.pipelineRun.update({
      where: {
        id: pipelineRunId,
      },
      data: {
        status: PipelineStatus.failed,
        completedAt: new Date(),
        processingError: errorMessage,
      },
    });
  }

  /**
   * Alias mantenido por compatibilidad con versiones anteriores.
   */
  async markFailed(pipelineRunId: string, error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown pipeline error';

    return this.markAsFailed(pipelineRunId, errorMessage);
  }

  /**
   * Obtiene una ejecución por su ID.
   */
  async findById(id: string) {
    return this.prisma.pipelineRun.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Obtiene una ejecución por weekLabel.
   */
  async findByWeekLabel(weekLabel: string) {
    return this.prisma.pipelineRun.findUnique({
      where: {
        weekLabel,
      },
    });
  }

  /**
   * Obtiene la última ejecución.
   */
  async findLatest() {
    return this.prisma.pipelineRun.findFirst({
      orderBy: {
        startedAt: 'desc',
      },
    });
  }
}

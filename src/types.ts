export enum OperationStatus {
  IN_PROGRESS,
  FAILED,
  DONE,
}

export interface Operation {
  id: number;
  name: string;
  status: OperationStatus;
}

export type OperationsById = Record<number, Operation>;

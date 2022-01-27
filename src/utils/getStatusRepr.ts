import { OperationStatus } from "../types";

export const getStatusRepr = (status: OperationStatus) => {
  switch (status) {
    case OperationStatus.IN_PROGRESS: {
      return "In Progress";
    }
    case OperationStatus.FAILED: {
      return "Failed";
    }
    case OperationStatus.DONE: {
      return "Done";
    }
    default: {
      return null;
    }
  }
};

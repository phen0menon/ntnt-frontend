import { useEffect, useMemo, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { createOperation, getOperations } from "../api";
import { config } from "../config";
import { Operation, OperationsById } from "../types";
import { getById } from "../utils/getById";

export const enum OperationSocketEvents {
  OperationChangeStatus = "OperationChangeStatus",
}

export const useOperations = () => {
  const socketRef = useRef<Socket | null>();
  const [operations, setOperations] = useState<OperationsById>({});

  useEffect(() => {
    (async () => {
      const { data: operations } = await getOperations();
      setOperations(getById(operations));
    })();
  }, []);

  useEffect(() => {
    socketRef.current = io(config.WS_URL);
    socketRef.current.on(
      OperationSocketEvents.OperationChangeStatus,
      (operation: Operation) => {
        setOperations((operations) => ({
          ...operations,
          [operation.id]: {
            ...operations[operation.id],
            status: operation.status,
          },
        }));
      }
    );

    return () => {
      socketRef.current?.disconnect();
      socketRef.current = null;
    };
  }, []);

  const list = useMemo(() => Object.values(operations), [operations]);

  const handleCreate = async (payload: { name: string }): Promise<void> => {
    const { data: createdOperation } = await createOperation(payload);
    setOperations((operations) => ({
      ...operations,
      [createdOperation.id]: createdOperation,
    }));
  };

  return { list, handleCreate };
};

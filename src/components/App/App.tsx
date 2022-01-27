import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  Paper,
  ThemeProvider,
} from "@mui/material";
import { useOperations } from "../../hooks/useOperations";
import { NewOperationDialog } from "../NewOperationDialog";
import { OperationsTable } from "../OperationsTable";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  const { list, handleCreate } = useOperations();

  const [newOperationDialogOpen, setNewOperationDialogOpen] =
    useState<boolean>(false);
  const openNewOperationDialog = () => setNewOperationDialogOpen(true);
  const closeNewOperationDialog = () => setNewOperationDialogOpen(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={styles.root}>
        <Container maxWidth="md" sx={styles.container}>
          <Box sx={styles.buttons}>
            <Button variant="outlined" onClick={openNewOperationDialog}>
              New operation
            </Button>
          </Box>
          <OperationsTable list={list} />
        </Container>
      </Paper>

      <NewOperationDialog
        onSubmit={handleCreate}
        open={newOperationDialogOpen}
        handleClose={closeNewOperationDialog}
      />
    </ThemeProvider>
  );
};

const styles = {
  root: {
    minHeight: "100vh",
  },
  container: {
    padding: "20px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 2,
  },
};

export default App;

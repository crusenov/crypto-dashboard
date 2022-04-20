import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";

import { gridColumns } from "./grid_data/GridData";
import { getCryptoData, setSelecedCryproData } from "./store/cryptoActions";

const Crypto = () => {
  const store = useSelector((state) => ({
    data: state.cryptoData.data,
    selectedData: state.cryptoData.selectedData,
  }));
  const dispatch = useDispatch();

  // It would be better to store the data in redux store and check if
  // the data is not changed during current session to avoid
  // calls on every load.
  useEffect(() => {
    dispatch(getCryptoData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={store.data}
        columns={gridColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(newSelectionModel) => {
          dispatch(setSelecedCryproData(newSelectionModel));
        }}
        selectionModel={store.selectedData}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "volumeUsd",
                sort: "desc",
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Crypto;

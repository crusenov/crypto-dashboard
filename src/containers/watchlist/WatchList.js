import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";

import { gridColumns } from "./grid_data/GridData";
import { getWatchListData } from "./store/watchListActions";

const WatchList = () => {
  const store = useSelector((state) => ({
    data: state.watchListData.data,
  }));
  const dispatch = useDispatch();

  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    dispatch(getWatchListData());
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
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
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

export default WatchList;

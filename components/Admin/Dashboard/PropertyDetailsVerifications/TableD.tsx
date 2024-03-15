import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  setEmailForAdmin,
  setPropertyIDForAdmin,
  setPropertyNameForAdmin,
  setVendorNameForAdmin,
} from "@/Store/AdminSlice";
import { GeTAdmin } from "../../Auth/Auth";

const API_ENDPOINT =
  "https://api.hostelbird.com/AdminHostelBird-dashboard/getPendingPropertiesDetailsForVerification/all";

const PropertiesDetailsVerifications = () => {
  interface DataI {
    id: string;
    email: string;
    PropertyName: string;
    VendorName: string;
    VerifiedProperty: Boolean;
    PropertyDetailsVerified: Boolean;
  }

  const [data, setData] = useState<DataI | any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const router = useRouter();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await GeTAdmin();

        if (!isAuthenticated) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT, {
          credentials: "include",
          mode: "cors",
        });
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else if (response.status === 401) {
          router.push("/");
        } else if (!response.ok) {
          setData(null);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper elevation={10} style={{ margin: "5rem" }}>
      <Typography
        variant="h4"
        style={{ marginBottom: "2rem", textAlign: "center" }}
      >
        Pending Details Verification
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Property Name</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Vendor Email</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Vendor Name</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                Property Details Verified
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                Property Verified
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(Array.isArray(data) ? data : [])
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((mappedData: DataI, index: number) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {mappedData?.PropertyName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {mappedData?.email}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {mappedData?.VendorName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {mappedData?.PropertyDetailsVerified ? "Yes" : "No"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {mappedData?.VerifiedProperty ? "Yes" : "No"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Pending</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        backgroundColor: "purple",
                        margin: "0 auto",
                      }}
                      onClick={() => {
                        dispatch(
                          setPropertyNameForAdmin(mappedData?.PropertyName)
                        );
                        dispatch(setEmailForAdmin(mappedData?.email));
                        dispatch(setVendorNameForAdmin(mappedData?.VendorName));
                        dispatch(setPropertyIDForAdmin(mappedData?.id));
                        router.push(
                          `new-property-details-verifications/${mappedData.VendorName}/${mappedData.PropertyName}`
                        );
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 30, 45]}
        component="div"
        count={data?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      />
    </Paper>
  );
};

export default PropertiesDetailsVerifications;

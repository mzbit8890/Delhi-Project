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
  LinearProgress,
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
  "https://api.hostelbird.com/AdminHostelBird-dashboard/getPendingPropertiesForVerification/all";

const MainComponentForPropertiesVerifications = () => {
  interface DataI {
    id: string;
    email: string;
    PropertyName: any;
    VendorName: string;
    country: string;
    date: string;
  }

  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState<DataI | any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

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

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3110/AdminHostelBird-dashboard/getVendor/PropertyName`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setUserData(data));
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT, {
          credentials: "include",
          mode: "cors",
        });
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          setLoading(false);
        } else if (!response.ok) {
          setLoading(false);
          alert(`Error ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    <>
      {" "}
      <LinearProgress color="info" />
    </>;
  }

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
        Pending Verification
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property Name</TableCell>
              <TableCell>Vendor Name</TableCell>
              <TableCell>Vendor Email</TableCell>
              <TableCell>Property ID</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data) &&
              (data.length > 0 && rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((mappedData: DataI, index: number) => (
                <TableRow key={index}>
                  <TableCell>{mappedData?.PropertyName}</TableCell>
                  <TableCell>{mappedData?.VendorName}</TableCell>
                  <TableCell>{mappedData?.email}</TableCell>
                  <TableCell>{mappedData?.id}</TableCell>
                  <TableCell>{mappedData?.country}</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>{mappedData?.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "purple" }}
                      onClick={() => {
                        dispatch(
                          setPropertyNameForAdmin(mappedData?.PropertyName)
                        );
                        dispatch(setPropertyIDForAdmin(mappedData?.id));
                        dispatch(setVendorNameForAdmin(mappedData?.VendorName));
                        dispatch(setEmailForAdmin(mappedData?.email));
                        router.push(
                          `new-property-verifications/${mappedData?.VendorName}/${mappedData?.PropertyName}`
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
        count={data.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      />
    </Paper>
  );
};

export default MainComponentForPropertiesVerifications;

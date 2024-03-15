import React, { useState, ChangeEvent, useEffect, useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
  Box,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
interface Room {
  id: string;
  PropertyName: string;
  VendorName: string;
  RoomName: string;
  Price: string;
  RoomGrade: string;
  NumberofGuestPerRoom: number;
  RoomType: string;
  RoomImages: string[];
  NumberOfRoomsOfSameType: number;
  NumberofRoomsBookedCurrently: number;
  NumberOfRoomsAvailable: number;
  Ensuite: string;
  RoomDescrption: string;
  weekDayPrice: number;
  weekEndPrice: number;
}

interface EditRoomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  formData: Room | any;
  onSave: (data: Room) => void;
}

const EditRoomDialog: React.FC<EditRoomDialogProps> = ({
  isOpen,
  onClose,
  formData,
  onSave,
}) => {
  const [editFormData, setEditFormData] = useState<any>();
  useEffect(() => {
    setEditFormData(formData);
  }, [formData]);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleChange = (field: keyof Room, value: string | number): void => {
    setEditFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdate = (): void => {
    onSave(editFormData);
  };

  const handleCancel = (): void => {
    onClose();
    setConfirmationOpen(false);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesToAdd = acceptedFiles.slice(0, 4);
      if (formData === null) {
        setEditFormData((prevRoomDetails: any) => ({
          ...prevRoomDetails,
          image: null,
        }));
      }
      setEditFormData((prevRoomDetails: any) => ({
        ...prevRoomDetails,
        image: [...filesToAdd],
      }));
    },
    [formData]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: true,
    });

  return (
    <Dialog open={isOpen} onClose={handleCancel}>
      <DialogTitle>Edit Room</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          id="RoomName"
          name="RoomName"
          label="Room Name"
          value={editFormData?.RoomName || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("RoomName", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="text"
          required
        />
        <TextField
          fullWidth
          id="RoomDescrption"
          name="RoomDescrption"
          label="Room Descirption"
          value={editFormData?.RoomDescrption || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("RoomDescrption", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="text"
          required
        />
        <FormControl required fullWidth variant="outlined" margin="normal">
          <InputLabel>Room Type</InputLabel>
          <Select
            label="Room Type"
            id="RoomType"
            name="RoomType"
            value={editFormData?.RoomType || ""}
            onChange={(e) => handleChange("RoomType", e.target.value as string)}
          >
            <MenuItem value="Private Bedroom">Private Bedroom</MenuItem>{" "}
            <MenuItem value="Double Bedroom">Double Bedroom</MenuItem>
            <MenuItem value="Twin Bedroom">Twin Bedroom</MenuItem>
            <MenuItem value="Family Bedroom">Family Bedroom</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
            <MenuItem value="Private Tent">Private Tent</MenuItem>
            <MenuItem value="Shared Tent">Shared Tent</MenuItem>
            <MenuItem value="Mixed Dorms">Mixed Dorms</MenuItem>
            <MenuItem value="Male Dorms">Male Dorms</MenuItem>
            <MenuItem value="Female Dorms">Female Dorms</MenuItem>
            <MenuItem value="Male Capsule">Male Capsule</MenuItem>
            <MenuItem value="Female Capsule">Female Capsule</MenuItem>
            <MenuItem value="Mixed Capsule">Mixed Capsule</MenuItem>
            <MenuItem value="Mixed Pod">Mixed Pod</MenuItem>
            <MenuItem value="Male Pod">Male Pod</MenuItem>
            <MenuItem value="Female Pod">Female Pod</MenuItem>
          </Select>
        </FormControl>
        <FormControl required fullWidth variant="outlined" margin="normal">
          <InputLabel>Room Grade</InputLabel>
          <Select
            id="RoomGrade"
            name="RoomGrade"
            label="Room Grade"
            value={editFormData?.RoomGrade || ""}
            onChange={(e) =>
              handleChange("RoomGrade", e.target.value as string)
            }
          >
            <MenuItem value="Basic">Basic</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Deluxe">Deluxe</MenuItem>
            <MenuItem value="Suite">Suite</MenuItem>
            <MenuItem value="Superior">Superior</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="price"
          name="price"
          label="Set Price"
          value={editFormData?.Price || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("Price", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="number"
          required
        />
        <TextField
          fullWidth
          id="NumberOfRoomsOfSameType"
          name="NumberOfRoomsOfSameType"
          label="Number of Rooms Of SameType"
          value={editFormData?.NumberOfRoomsOfSameType || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("NumberOfRoomsOfSameType", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="number"
          required
        />
        <TextField
          fullWidth
          id="weekDayPrice"
          name="weekDayPrice"
          label="weekDayPrice"
          value={editFormData?.weekDayPrice || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("weekDayPrice", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="number"
          required
        />
        <TextField
          fullWidth
          id="weekEndPrice"
          name="weekEndPrice"
          label="weekEndPrice"
          value={editFormData?.weekEndPrice || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("weekEndPrice", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="number"
          required
        />
        <TextField
          fullWidth
          id="NumberofGuestPerRoom"
          name="NumberofGuestPerRoom"
          label="NumberofGuestPerRoom"
          value={editFormData?.NumberofGuestPerRoom || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("NumberofGuestPerRoom", e.target.value)
          }
          variant="outlined"
          margin="normal"
          type="number"
          required
        />
        <FormControl required component="fieldset" margin="normal">
          <Typography variant="subtitle1">Ensuite</Typography>
          <RadioGroup
            id="Ensuite"
            name="Ensuite"
            row
            value={editFormData?.Ensuite || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange("Ensuite", e.target.value)
            }
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Box
          {...getRootProps()}
          className="dropzone"
          sx={{
            padding: "1rem",
            maxWidth: "80rem",
          }}
        >
          <input {...getInputProps()} />
          <Typography
            // className={`${poppins.variable}`}
            sx={{ fontFamily: "var(--font-poppins)" }}
            variant="h4"
          >
            Upload Room Images
          </Typography>

          {acceptedFiles.length >= 0 && (
            <Box
              sx={{
                border: "2px dashed #cccccc",
                borderRadius: "1rem",
                padding: "2rem",
                marginTop: "1rem",
              }}
            >
              {isDragActive ? (
                <Typography
                  // className={`${poppins.variable}`}
                  sx={{ fontFamily: "var(--font-poppins)" }}
                  variant="h5"
                >
                  Drop the files here ...
                </Typography>
              ) : (
                <Typography
                  // className={`${poppins.variable}`}
                  sx={{ fontFamily: "var(--font-poppins)" }}
                  variant="h5"
                >
                  Drag n drop some files here, or click to select files (Max 4)
                </Typography>
              )}
              <div className="preview">
                {formData !== null &&
                  acceptedFiles
                    .slice(0, 4)
                    .map((file, index) => (
                      <Image
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        width={150}
                        height={150}
                      />
                    ))}
              </div>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={() => setConfirmationOpen(true)} color="primary">
          Update
        </Button>
        <Dialog open={isConfirmationOpen} onClose={handleCancel}>
          <DialogTitle>Confirm Update</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to update the room?</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCancel(), setConfirmationOpen(!isConfirmationOpen);
              }}
            >
              No
            </Button>
            <Button
              onClick={() => {
                handleUpdate(), setConfirmationOpen(!isConfirmationOpen);
              }}
              color="primary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </DialogActions>
    </Dialog>
  );
};

export default EditRoomDialog;

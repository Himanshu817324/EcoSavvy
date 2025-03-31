import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button, Avatar } from "@mui/material";

const ProfilePage = () => {
  const [userData, setUserData] = useState({ name: "John Doe", email: "johndoe@example.com", phone: "", address: "" });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardContent className="text-center">
          <Avatar sx={{ width: 80, height: 80, margin: "auto" }}>JD</Avatar>
          <Typography variant="h5" className="mt-4 font-bold text-gray-800">Profile</Typography>

          <div className="space-y-4 mt-4">
            <TextField label="Full Name" name="name" fullWidth value={userData.name} disabled={!editMode} onChange={handleChange} />
            <TextField label="Email" name="email" fullWidth value={userData.email} disabled />
            <TextField label="Phone" name="phone" fullWidth value={userData.phone} disabled={!editMode} onChange={handleChange} />
            <TextField label="Address" name="address" fullWidth value={userData.address} disabled={!editMode} onChange={handleChange} />
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="mt-4"
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
          >
            {editMode ? "Save Changes" : "Edit Profile"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;

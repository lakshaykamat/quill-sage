"use client";
import { useRouter } from "next/navigation";
import { deleteData } from "../utils/api/user";

const Settings = () => {
  const router = useRouter();

  const log = () => {
    router.push("http://localhost:3000/login");
  };

  const deleteAllData = async() => {
    const sure = confirm("Are you sure you wan't to delete whole data?")
    if(sure){
      const response = await deleteData()
      response.success ? alert("Deleted") : alert("Failed to delete")
    }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="mb-4">Settings</h1>
      <div className="flex gap-1">
        <button
          onClick={deleteAllData}
          className="bg-red-700 rounded button-1 hover:bg-red-800"
        >
          Delete all data
        </button>
        <button
          onClick={log}
          className=" button-1"
        >
          Login with another account
        </button>
      </div>
    </div>
  );
};

export default Settings;

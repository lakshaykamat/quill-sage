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
          className="px-2 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Delete all data
        </button>
        <button
          onClick={log}
          className="px-2 py-2 text-white bg-blue-500 rounded"
        >
          Login with another account
        </button>
      </div>
    </div>
  );
};

export default Settings;

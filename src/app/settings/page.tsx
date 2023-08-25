"use client";
import { useRouter } from "next/navigation";
import { deleteData } from "../utils/api/user";

const Settings = () => {
  const router = useRouter();

  const log = () => {
    router.push("http://localhost:8080/auth/google");
  };

  const deleteAllData = async() => {
    const response = await deleteData()
    response.success ? alert("Deleted") : alert("Failed to delete")
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h1>Settings</h1>
      <div className="flex gap-1">
        <button
          onClick={deleteAllData}
          className="px-2 py-2 text-white bg-red-500 rounded"
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

"use client";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload } from "@/components/icons/upload";
import { useState } from "react";

export default function UploadButton() {
  const [imageId, setImageId] = useState("");
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result) => {
          let res = result as UploadResult
          setImageId(res.info.public_id);
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
        uploadPreset="wynddgp4"
      >
        <div className="flex gap-1 font-medium text-base">
        <Upload/>
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
}

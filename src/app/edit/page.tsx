"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl">Edit Image</h1>
        </div>
        <div className="flex gap-6 justify-center">
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Generative Fill
            </Button>
            <Label>Enter Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>

          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>

          <Button onClick={() => setTransformation("grayscale")}>
            Convert to gray
          </Button>

          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>

          <Button onClick={() => setTransformation("bg-remove")}>
            Remove Background
          </Button>

          <Button
            className="bg-red-700"
            variant="ghost"
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width={300} height={200} alt="images" />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              alt="images"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              blur="800"
              alt="images"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              grayscale
              alt="images"
            />
          )}

          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              pixelate
              alt="images"
            />
          )}

          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width={300}
              height={200}
              removeBackground
              alt="images"
            />
          )}
        </div>
      </div>
    </section>
  );
}

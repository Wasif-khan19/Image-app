import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageInAlbum } from "./action";

export function AlbumDialog({image}:{image: SearchResult}) {
    const [albumName, setAlbumName] = useState("")
    const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FolderPlus className="mr-2 h-4"/>
          <span>Add To Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To Album</DialogTitle>
          <DialogDescription>
            Add image in album
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input onChange={e => setAlbumName(e.currentTarget.value)} id="album-name" value={albumName} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async()=>{
            setOpen(false)
            await addImageInAlbum (image,albumName)
          }} type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

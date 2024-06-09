"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { AlignJustify, Copy } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SlideInNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <AlignJustify />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <DialogClose asChild>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant={"ghost"}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SlideInNav;

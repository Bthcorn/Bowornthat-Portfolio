'use client'
import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogClose, DialogTrigger, DialogHeader, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';

const SlideInNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="p-2 bg-blue-500 text-white rounded">
        Open Menu
      </button>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-r data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 translate-x-[0%] h-full">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex items-center space-x-2">
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
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
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

import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface StaffProfileProps {
  staff: {
    name: string;
    role: string;
    imageSrc: string;
    profile: React.ReactNode;
  };
  children: React.ReactNode;
}
const StaffProfile = ({ staff, children }: StaffProfileProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden bg-brown-200 shrink-0">
              <Image
                src={staff.imageSrc}
                alt={staff.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <DialogTitle className="font-cab text-lg sm:text-xl">
                {staff.name}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-brown-600">
                {staff.role}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 space-y-3">
          <p>{staff.profile}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StaffProfile;

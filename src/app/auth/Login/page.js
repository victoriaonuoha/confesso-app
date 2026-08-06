import Image from "next/image";

export default function TestingPage() {
  return (
    <div className="flex ">
      <div className="h-screen w-1/2 relative ">
        <Image src="/images/36684.jpg" fill className="object-cover" />
      </div>
      <div>
       
      </div>
    </div>
  );
}

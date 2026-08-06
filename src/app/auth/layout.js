import Image from "next/image";

export default function Layout({ children }) {
  return (
   
      
        <div className="flex ">
          <div className="h-screen w-1/2 relative ">
            <Image src="/images/36684.jpg" fill className="object-cover" alt="sign up illustration" />
          </div>
          <div className="w-1/2">{children}</div>
        </div>
    
 
  );
}

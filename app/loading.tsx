import { Loader2 } from "lucide-react";

const Loading = () => {
  return ( <div className="w-full h-full min-h-screen flex justify-center items-center">
    <div className="animate-spin">
      <Loader2 className="w-12 h-12" />
    </div>
  </div> );
}
 
export default Loading;
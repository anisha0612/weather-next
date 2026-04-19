import type { ReactNode } from "react";

interface Props {
    isLoading?: boolean;
    children?: ReactNode;

}
function Loader({ isLoading, children }: Props) {
    if(!isLoading) return <>{children}</>;
    return (
        <div className="flex items-center justify-center h-64">
            <div className="animate-pulse rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
}
export default Loader;
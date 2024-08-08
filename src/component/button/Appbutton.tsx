import { Spin } from "antd";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset"
}
export const Appbutton = ({className, loading, disabled, children, type = "button" }: PropsButton) => {
    return (
        <div>
            <button 
                className={`${className} ${
                    disabled ? "bg-[#CA5C3B] text-[#FFFFFF]" : "bg-[#EEC5C7] text-back"
                } w-[76px] h-[33px] rounded-2xl font-medium`}
                type={type}
                >
                    {children} {loading &&  <Spin />}
            </button>
        </div>  
    );
};
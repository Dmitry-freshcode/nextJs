import {DetailedHTMLProps, HTMLAttributes, ParamHTMLAttributes, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}

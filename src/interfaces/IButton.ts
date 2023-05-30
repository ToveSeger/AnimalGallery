export default interface IButton{
    className?:string;
    Type:"button" | "submit" | "reset";
    Method?:()=>any;
    children?:any;
}
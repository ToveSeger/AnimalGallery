import IHeadingBlock from "../../../interfaces/IHeadingBlock";
import styles from "./HeadingBlock.module.scss"

export const HeadingBlock = (props:IHeadingBlock) => {
  const classes= `${styles.headingBlockContainer} ${props.className}`;
  return (
    <div className={classes}>
        <p>{props.Text}</p>
    </div>
  )
}

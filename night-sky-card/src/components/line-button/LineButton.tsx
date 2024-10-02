import styles from "./LineButton.module.css";

interface Props {
    text: string;
    linkTo: string;
}

const LineButton = ({ text, linkTo }: Props) => {
    return (
        <a href={linkTo} className={styles.container}>
            {text}
        </a>
    );
};
export default LineButton;

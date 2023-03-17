import utilStyles from "../styles/utils.module.css"

export default function e404() {
    return (
        <div className={utilStyles.error}>
            <h1 className={utilStyles.errorText}>500 | Server-side error occurred</h1>
        </div>
    )
}
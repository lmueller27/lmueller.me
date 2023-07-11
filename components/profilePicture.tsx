import Image from "next/image";
import utilStyles from "../styles/utils.module.css"

export default function ProfilePicture() {
    return (
        <Image
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={250}
            width={250}
            priority={true}
            alt=""
        />
    )
}
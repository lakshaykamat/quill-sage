import { MdRssFeed } from "react-icons/md"
import { AiFillTags, AiFillSetting, AiFillFileAdd, AiFillHome, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsFillCollectionFill } from "react-icons/bs"
import { FaUserCircle, FaStickyNote } from "react-icons/fa"

const styles = "w-6 h-6 text-gray-700"
export const FEED_ICON = <MdRssFeed className={styles} />
export const NOTE_ICON = <FaStickyNote className={styles} />
export const TAGS_ICON = <AiFillTags className={styles} />
export const Collection_ICON = <BsFillCollectionFill className={styles} />
export const NEWNOTE_ICON = <AiFillFileAdd className={styles} />
export const SETTINGS_ICON = <AiFillSetting className={styles} />
export const HOME_ICON = <AiFillHome className={styles} />
export const USER_ICON = <FaUserCircle className={styles} />
export const SET_LIKE_ICON = ({ classes }: { classes: string }) => {
    return <AiFillHeart className={`${styles} ${classes}`} />
}
export const PLACEHOLDER_LIKE_ICON = ({ classes }: { classes: string | null }) => {
    return <AiOutlineHeart className={`w-6 h-6 text-gray-200 ${classes}`} />
}
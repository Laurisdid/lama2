import { useContext } from "react";
import ZoltContext from "./ZoltContext";

function Message() {

    const {message} = useContext(ZoltContext);

    if (null === message) {
        return null;
    }

    return (
        <div className="show-message">
            <div className={'alert alert-' + message.type} role="alert">
            {message.text}
            </div>
        </div>
    );

}

export default Message;
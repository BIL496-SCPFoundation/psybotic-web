class PathNameOperations {

    static normalizePathName(pathName) {
        if (pathName[pathName.length - 1] === "/") {
            return pathName;
        } else {
            return pathName.concat("/");
        }
    }


    static parentPathName(pathName) {
        if(pathName[pathName.length - 1] === "/")
            pathName.substring(0, pathName.lastIndexOf("/") + 1);
        return pathName.substring(0, pathName.lastIndexOf("/") + 1);
    }

    static finalPathName(pathName) {
        if(!pathName.includes("/"))
            return pathName;
        return pathName.substring(pathName.lastIndexOf("/") + 1, pathName.length);
    }

    static chatIdCalculate(receiverId, senderId){
        let receiverId_float = parseFloat(receiverId);
        let senderId_float = parseFloat(senderId);
        if (receiverId_float < senderId_float) {
            return receiverId + senderId;
        } else {
            return senderId + receiverId
        }
    }
}

export default PathNameOperations;
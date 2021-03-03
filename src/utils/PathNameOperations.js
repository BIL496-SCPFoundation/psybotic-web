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
            pathName.substring(0, pathName.lastIndexOf("/") + 1)
        return pathName.substring(0, pathName.lastIndexOf("/") + 1)
    }
}

export default PathNameOperations;
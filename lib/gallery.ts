import fs from "fs";
import path from "path";
import imageSize from 'image-size'

export type PhotoInfo = {
    filePath: string,
    blurFilePath: string,
    width: number,
    height: number
}

export function getPhotoInfos() {

    const albumDirectory = path.join(process.cwd(), 'public/album/compressed');
    const fileNames = fs.readdirSync(albumDirectory);
    const fileInfos : PhotoInfo[] = fileNames.map((fileName) => {
        const dimension = imageSize(path.join(albumDirectory, fileName))
        return {
            filePath: '/album/compressed/' + fileName,
            blurFilePath: '/album/blurred/' + fileName,
            width: dimension.width || 0,
            height: dimension.height || 0
        }
    })
    return fileInfos;
}
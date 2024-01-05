import { PhotoInfo, getPhotoInfos } from '../../lib/gallery'
import Image from 'next/image';
import shuffle from '../../lib/shuffle';
import { useEffect, useState } from 'react';
import { Loader } from 'react-feather';

export async function getStaticProps() {
    let photoInfos = getPhotoInfos();
    photoInfos = shuffle(photoInfos)
    return {
        props: {
            photoInfos
        }
    }
}
 
const Gallery = ({photoInfos}: {photoInfos: PhotoInfo[]}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false)
        }

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }
        
        return () => {
            window.removeEventListener('load', handleLoad);
        }
    }, [])

    return(
        <div className='gallery'>
            <h1>The beauties of the world</h1>
            {isLoading && <div className='loader'><Loader size={30} /><div className='text'>Hang on please. The gallery is loading.</div></div>}
            <div className={isLoading ? "photo-grid loading" : "photo-grid"}>
                {photoInfos.map((photoInfo, index: number) => {
                    return(
                        <div className='item' key={index}>
                            <Image
                                key={index}
                                src={photoInfo.filePath}
                                alt={photoInfo.filePath}
                                width={photoInfo.width}
                                height={photoInfo.height}
                                blurDataURL={photoInfo.blurFilePath}
                                placeholder='blur'
                                loading='lazy'
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";


function ImageCld() {
    const cld = new Cloudinary({ cloud: { cloudName: 'dlxrqrbby' } });
  
    // Use this sample image or upload your own via the Media Explorer
    const img = cld
          .image('cld-sample-5')
          .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
          .quality('auto')
          .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  
    return (<AdvancedImage cldImg={img}/>);
}


export default ImageCld
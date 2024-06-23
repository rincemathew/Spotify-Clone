import {openUploadWidget} from "../../utils/CloudinaryService";
// import {cloudinary_upload_preset} from "../../config";

function CloudinaryUpload({setUrl, setName}) {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dejgapbws",
                uploadPreset: "ky4uukbh",
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    // console.log(result.info.secure_url)
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
}

export default CloudinaryUpload
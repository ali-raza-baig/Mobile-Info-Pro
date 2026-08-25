const uploadImage = async ({ formData }) => {
    try {
        const res = fetch(``, {
            method: "POST",
            body: formData
        })
    } catch (error) {
        console.log(`Error in file uploading route`)
        console.log(error)
    }
}

export default uploadImage;
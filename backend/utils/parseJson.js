const parseJSON = (content) => {
    try {
        const clean = content
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(clean);
    } catch (err) {
        console.error("JSON Parse Error");
        console.error(content);
        throw err;
    }
};

export default parseJSON;
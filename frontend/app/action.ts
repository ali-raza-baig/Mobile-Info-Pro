const baseUrl = "http://localhost:8080/api";

export const getAllBrands = async () => {
    try {
        const res = await fetch(`${baseUrl}/brand/get`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch brands");
        }

        return data.brands;
    } catch (error) {
        console.error("Failed to fetch brands:", error);
        throw error;
    }
};

export const singleBrand = async (slug: string) => {
    try {
        const res = await fetch(`${baseUrl}/brand/single/${slug}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch brands");
        }

        return data.brand;
    } catch (error) {
        console.error("Failed to fetch brands:", error);
        throw error;
    }
}
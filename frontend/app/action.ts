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

export const seriesByBrand = async (id: string) => {
    try {
        const res = await fetch(`${baseUrl}/series/by-brand/${id}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch series by brand");
        }

        return data.series;
    } catch (error) {
        console.error("Failed to fetch series by brand:", error);
        throw error;
    }
}

export const singleSeries = async (slug: string) => {
    try {
        const res = await fetch(`${baseUrl}/series/single/${slug}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch series");
        }

        return data.series;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const homePageModels = async () => {
    try {
        const res = await fetch(`${baseUrl}/model/home-page`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch series");
        };

        let allModels = {
            tranding: data.trandingModel,
            new: data.newModel,
            popular: data.popularModel
        };

        return allModels;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const singleModel = async (slug: string) => {
    try {
        const res = await fetch(`${baseUrl}/model/single/${slug}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch Model");
        }

        return data.model;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const competitorModels = async ({ min, max }: { min: number, max: number }) => {
    try {
        const res = await fetch(`${baseUrl}/model/competitor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ min, max }),
        });


        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch Model");
        }

        return data.models;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const getProducts = async (query = '') => {
    try {
        const res = await fetch(`${baseUrl}/model/collection?${query}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch Model");
        }

        return data;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const modelsByBrand = async (id: string) => {
    try {
        const res = await fetch(`${baseUrl}/model/by-brand/${id}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch Model");
        }

        return data.model;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}

export const modelsBySeries = async (id: string) => {
    try {
        const res = await fetch(`${baseUrl}/model/by-series/${id}`, {
            method: "GET",
            redirect: 'follow'
        });

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();

        if (!data.success) {
            throw new Error(data.message || "Failed to fetch Model");
        }

        return data.model;
    } catch (error) {
        console.error("Failed to fetch series:", error);
        throw error;
    }
}
'use client'
import { getAllBrands } from "@/app/action";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ContextType {
    brands: any[];
    loading?: boolean;
    error?: string | boolean;
    fetchBrands?: () => void
}

const CreateContext = createContext<ContextType | null>(null);

interface ProviderProps {
    children: React.ReactNode;
}

export const ProviderContext = ({ children }: ProviderProps) => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null | any>(null);

    const fetchBrands = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getAllBrands(); // from api.ts
            setBrands(data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBrands()
    }, [])

    return (
        <CreateContext.Provider value={{ brands, loading, error, fetchBrands }}>
            {children}
        </CreateContext.Provider>
    );
};

export const useMyContext = () => {
    const context = useContext(CreateContext);

    if (!context) {
        throw new Error("useMyContext must be used inside ProviderContext");
    }

    return context;
};
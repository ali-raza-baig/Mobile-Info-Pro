'use client'
import { homePageModels } from "@/app/action";
import React, { createContext, useContext, useEffect, useState } from "react";

const ModelContext = createContext<any>(null)

export const ModelProvider = ({ children }: { children: React.ReactNode }) => {
    const [models, setModels] = useState<any>()
    const fetchHomePage = async () => {
        try {
            const model = await homePageModels()
            setModels(model)
        } catch (err) {
            console.log(`Error in fetch Home page models`)
        }
    }

    useEffect(() => {
        fetchHomePage()
    }, [])
    return (
        <ModelContext.Provider value={{ models, fetchHomePage }}>
            {children}
        </ModelContext.Provider>
    )
}

export const useModel = () => useContext(ModelContext)
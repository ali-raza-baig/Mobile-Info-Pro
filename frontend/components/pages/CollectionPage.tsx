'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TrendingPhoneCard from '../global/cards/TrendingPhoneCard';
import { getAllBrands, getProducts } from '@/app/action'; // assume getProducts exists

// Type for a product
interface Product {
    id: string;
    slug: string;
    name: string;
    brand: string;
    colors: string[];
    price: number;
    images: { img: string }[];
    content?: {
        details?: {
            estimatedPrice?: {
                usa?: { min?: number };
            };
        };
    };
}

// Type for brand option
interface BrandOption {
    _id: string;
    name: string;
}

// Response from getProducts
interface ProductsResponse {
    products: Product[];
    total: number;
    page: number;
    totalPages: number;
}

const CollectionPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // --- UI state ---
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // --- Filter states (initialized from URL) ---
    const [search, setSearch] = useState<string>(searchParams.get('search') ?? '');
    const [sortBy, setSortBy] = useState<string>(searchParams.get('sort') ?? 'title_asc');
    const [priceFrom, setPriceFrom] = useState<string>(searchParams.get('priceFrom') ?? '');
    const [priceTo, setPriceTo] = useState<string>(searchParams.get('priceTo') ?? '');
    const [selectedColors, setSelectedColors] = useState<string[]>(
        searchParams.get('colors')?.split(',').filter(Boolean) ?? []
    );
    const [selectedBrands, setSelectedBrands] = useState<string[]>(
        searchParams.get('brands')?.split(',').filter(Boolean) ?? []
    );

    // --- Pagination state ---
    const [page, setPage] = useState<number>(parseInt(searchParams.get('page') || '1', 10));
    const limit = 12; // items per page

    // --- Products state ---
    const [products, setProducts] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // --- Brands state ---
    const [brandOptions, setBrandOptions] = useState<BrandOption[]>([]);
    const [brandsLoading, setBrandsLoading] = useState<boolean>(true);

    // --- Fetch brands on mount ---
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await getAllBrands();
                setBrandOptions(res);
            } catch (err) {
                console.error('Error fetching brands:', err);
                // fallback: extract from products? but we don't have products yet.
                // Might leave empty or try to extract from products after fetch.
            } finally {
                setBrandsLoading(false);
            }
        };
        fetchBrands();
    }, []);

    // --- Sync URL params to state when URL changes (back/forward) ---
    useEffect(() => {
        setSearch(searchParams.get('search') ?? '');
        setSortBy(searchParams.get('sort') ?? 'title_asc');
        setPriceFrom(searchParams.get('priceFrom') ?? '');
        setPriceTo(searchParams.get('priceTo') ?? '');
        setSelectedColors(searchParams.get('colors')?.split(',').filter(Boolean) ?? []);
        setSelectedBrands(searchParams.get('brands')?.split(',').filter(Boolean) ?? []);
        const pageParam = parseInt(searchParams.get('page') || '1', 10);
        setPage(isNaN(pageParam) ? 1 : pageParam);
    }, [searchParams]);

    // --- Helper to update a single filter in URL ---
    const updateFilter = useCallback(
        (key: string, value: string | string[] | null) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
                params.delete(key);
            } else {
                params.set(key, Array.isArray(value) ? value.join(',') : String(value));
            }
            // Reset page to 1 when filters change
            params.set('page', '1');
            router.push(`${pathname}?${params.toString()}`);
        },
        [pathname, router, searchParams]
    );

    // --- Handlers for each filter (they update local state and URL) ---
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        updateFilter('search', search);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSortBy(value);
        updateFilter('sort', value);
    };

    const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPriceFrom(val);
        updateFilter('priceFrom', val);
    };

    const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPriceTo(val);
        updateFilter('priceTo', val);
    };

    const toggleColor = (color: string) => {
        const newColors = selectedColors.includes(color)
            ? selectedColors.filter((c) => c !== color)
            : [...selectedColors, color];
        setSelectedColors(newColors);
        updateFilter('colors', newColors);
    };

    const toggleBrand = (brandId: string) => {
        const newBrands = selectedBrands.includes(brandId)
            ? selectedBrands.filter((b) => b !== brandId)
            : [...selectedBrands, brandId];
        setSelectedBrands(newBrands);
        updateFilter('brands', newBrands);
    };

    const resetAllFilters = () => {
        setSearch('');
        setSortBy('title_asc');
        setPriceFrom('');
        setPriceTo('');
        setSelectedColors([]);
        setSelectedBrands([]);
        setPage(1);
        router.push(pathname); // clear all params
    };

    // --- Pagination handlers ---
    const goToPage = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(newPage));
        router.push(`${pathname}?${params.toString()}`);
    };

    // --- Fetch products from API ---
    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Build query params
            const params = new URLSearchParams();
            if (search) params.set('search', search);
            if (sortBy) params.set('sort', sortBy);
            if (priceFrom) params.set('priceFrom', priceFrom);
            if (priceTo) params.set('priceTo', priceTo);
            if (selectedColors.length) params.set('colors', selectedColors.join(','));
            if (selectedBrands.length) params.set('brands', selectedBrands.join(','));
            params.set('page', String(page));
            params.set('limit', String(limit));

            // Call server action or API route
            const response = await getProducts(params.toString());
            // Assuming getProducts accepts a query string or an object.
            // Adjust according to your actual action signature.
            const data: ProductsResponse = response;
            setProducts(data.products);
            setTotalPages(data.totalPages);
            setTotalItems(data.total);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError('Failed to load products. Please try again.');
            setProducts([]);
            setTotalPages(1);
            setTotalItems(0);
        } finally {
            setLoading(false);
        }
    }, [ sortBy, priceFrom, priceTo, selectedColors, selectedBrands, page, limit]);

    // --- Fetch products whenever filters or page change ---
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // --- Compute active filter count for display ---
    const activeFilterCount =
        (search ? 1 : 0) +
        (selectedBrands.length > 0 ? 1 : 0) +
        (selectedColors.length > 0 ? 1 : 0) +
        (priceFrom || priceTo ? 1 : 0);

    // --- Color options (can be fetched from backend if needed) ---
    const colorOptions = ['Red', 'Blue', 'Green', 'Orange', 'Purple', 'Teal'];

    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                    {activeFilterCount > 0 && (
                        <button
                            onClick={resetAllFilters}
                            className="text-sm text-gray-500 underline underline-offset-4 hover:text-gray-700"
                        >
                            Clear all filters ({activeFilterCount})
                        </button>
                    )}
                </header>

                {/* Mobile filter toggle */}
                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    >
                        <span className="text-sm font-medium">Filters &amp; Sorting</span>
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    {/* Filters panel */}
                    <div className={`space-y-4 ${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
                        {/* Sort */}
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                                Sort By
                            </label>
                            <select
                                id="SortBy"
                                className="mt-1 w-full rounded-sm border-gray-300 text-sm"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="title_asc">Name (A–Z)</option>
                                <option value="title_desc">Name (Z–A)</option>
                                <option value="price_asc">Price (Low–High)</option>
                                <option value="price_desc">Price (High–Low)</option>
                            </select>
                        </div>

                        {/* Search */}
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Search</p>
                            <form onSubmit={handleSearch} className="mt-1 flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Search by keywords"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="rounded-lg border border-dark-blue px-3 py-2 outline-sky-blue focus:outline-dark-blue"
                                />
                                <button
                                    type="submit"
                                    className="rounded-md bg-dark-blue px-4 py-1.5 font-bold text-white transition hover:bg-blue-800"
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        {/* Filter sections */}
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>
                            <div className="mt-1 space-y-2">
                                {/* Brand filter */}
                                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Brands</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            {brandsLoading ? (
                                                <p className="text-sm text-gray-500">Loading brands…</p>
                                            ) : brandOptions.length === 0 ? (
                                                <p className="text-sm text-gray-500">No brands available</p>
                                            ) : (
                                                <ul className="space-y-1">
                                                    {brandOptions.map((brand) => (
                                                        <li key={brand._id}>
                                                            <label className="inline-flex items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedBrands.includes(brand._id)}
                                                                    onChange={() => toggleBrand(brand._id)}
                                                                    className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                                />
                                                                <span className="text-sm font-medium text-gray-700">{brand.name}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </details>

                                {/* Price filter */}
                                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Price</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                                        value={priceFrom}
                                                        onChange={handlePriceFromChange}
                                                    />
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                                                        value={priceTo}
                                                        onChange={handlePriceToChange}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                {/* Colors filter */}
                                {/* <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                        <span className="text-sm font-medium">Colors</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <div className="border-t border-gray-200 p-4">
                                            <ul className="space-y-1">
                                                {colorOptions.map((color) => (
                                                    <li key={color}>
                                                        <label className="inline-flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedColors.includes(color.toLowerCase())}
                                                                onChange={() => toggleColor(color.toLowerCase())}
                                                                className="size-5 rounded-sm border-gray-300 shadow-sm"
                                                            />
                                                            <span className="text-sm font-medium text-gray-700">{color}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </details> */}
                            </div>
                        </div>
                    </div>

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                        {loading ? (
                            <div className="py-12 text-center">
                                <p className="text-lg text-gray-500">Loading products…</p>
                            </div>
                        ) : error ? (
                            <div className="py-12 text-center">
                                <p className="text-lg text-red-500">{error}</p>
                                <button
                                    onClick={() => fetchProducts()}
                                    className="mt-4 text-sm text-blue-600 underline underline-offset-4"
                                >
                                    Retry
                                </button>
                            </div>
                        ) : products.length === 0 ? (
                            <div className="py-12 text-center">
                                <p className="text-lg text-gray-500">No products match your filters.</p>
                                <button
                                    onClick={resetAllFilters}
                                    className="mt-4 text-sm text-blue-600 underline underline-offset-4"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {products.map((product) => {
                                        const price =
                                            product.content?.details?.estimatedPrice?.usa?.min ?? product.price;
                                        const imageUrl = product.images?.[0]?.img
                                            ? `${process.env.NEXT_PUBLIC_URL_IMAGES}/${product.images[0].img}`
                                            : '/placeholder.jpg';
                                        return (
                                            <li key={product.id}>
                                                <TrendingPhoneCard
                                                    image={imageUrl}
                                                    name={product.name}
                                                    price={`$ ${price}`}
                                                    spec="" // adjust if needed
                                                    link={`/model/${product.slug}`}
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="mt-8 flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => goToPage(page - 1)}
                                            disabled={page <= 1}
                                            className="rounded-md border border-gray-300 px-3 py-1 text-sm disabled:opacity-50"
                                        >
                                            Previous
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => goToPage(p)}
                                                className={`rounded-md px-3 py-1 text-sm ${p === page
                                                        ? 'bg-dark-blue text-white'
                                                        : 'border border-gray-300 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => goToPage(page + 1)}
                                            disabled={page >= totalPages}
                                            className="rounded-md border border-gray-300 px-3 py-1 text-sm disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                                <div className="mt-2 text-center text-sm text-gray-500">
                                    Showing {products.length} of {totalItems} products
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectionPage;
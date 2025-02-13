import React from 'react';
import SearchBar from './searchBar';
import PhotoGrids from './photoGrids';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const PHOTOS_PER_PAGE = 36;

const Body = () => {
    let { photos, isDarkMode } = useSelector((state) => state.photo);
    const [currentPage, setCurrentPage] = useState(1);
    const handleNewSearch = () => {
        setCurrentPage(1);
        setNewSearch(true);
    };
    const totalPages = Math.ceil(photos?.length / PHOTOS_PER_PAGE);


    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <div>
            <h1 className={`p-4 text-3xl font-bold ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>HomePage</h1>
            <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage} handleNewSearch={handleNewSearch} />
            <PhotoGrids currentPage={currentPage} setCurrentPage={setCurrentPage} handlePageChange={handlePageChange} />
        </div>
    );
};

export default Body;
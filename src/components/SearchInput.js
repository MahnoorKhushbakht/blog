'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { getSearchData } from "@/lib/blogs"; // Adjust this import path if needed

const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getSearchData(); // Fetch all categories
        setData(allData);
      } catch (err) {
        console.error("Something went wrong while fetching data..", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    // Filter results based on inputText
    if (value.length > 0) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]); // Clear results when input is empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here for handling form submission if needed
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        value={inputText}
        onChange={handleChange}
        placeholder="Search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
        className="text-red-400 max-w-full sm:max-w-[10rem] h-10"
      />
      {filteredData.length > 0 && ( // Only show results if there are any
        <div className="mt-2 absolute z-10 bg-white border border-gray-200 rounded shadow-md">
          {filteredData.map((item) => (
            <div 
              key={item.slug} 
              className="text-black hover:underline p-2 cursor-pointer"
            >
              <Link href={`/blog/${item.slug}`} passHref>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchInput;

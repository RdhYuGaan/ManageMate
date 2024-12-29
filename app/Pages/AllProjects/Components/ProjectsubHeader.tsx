import React, { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContextApp } from "@/app/contextApp"; // Assuming this is your context hook

function ProjectsSubHeader() {
    return (
        <div className="mt-20 flex justify-between font-bold items-center">
            <MyProjectsText />
            <SortByButton />
        </div>
    );
}

function MyProjectsText() {
    return (
        <p className="text-[26px] font-bold text-black max-sm:text-[23px]">
            My Projects
        </p>
    );
}

function SortByButton() {
    const {
        openSortingDropDownObject: { openSortingDropDown, setOpenSortingDropDown },
        sortingDropDownPositionsObject: { setSortingDropDownPositions },
    } = useContextApp();

    const sortingLinkRef = useRef<HTMLDivElement>(null);

    // Example sortingOptions for illustration
    const sortingOptions = [
        {
            label: "Category",
            options: [
                { label: "A-Z", selected: false },
                { label: "Z-A", selected: true },
            ],
        },
        { label: "Date", options: [{ label: "Newest", selected: false }] },
    ];

    const flatten = sortingOptions
        .flatMap((option) => option.options)
        .find((option) => option.selected);

    let sortingLabel = "";

    if (flatten) {
        if (flatten.label === "A-Z" || flatten.label === "Z-A") {
            sortingLabel = `Order ${flatten.label}`;
        } else {
            sortingLabel = `${flatten.label} Projects`;
        }
    }

    function clickedSortingLink() {
        if (sortingLinkRef.current) {
            const rect = sortingLinkRef.current.getBoundingClientRect();
            const { top, left, width } = rect;
            setSortingDropDownPositions({
                top: top + window.scrollY + 30,
                left: left + window.scrollX,
                width: width,
            });
        }
        setOpenSortingDropDown(true);
    }

    return (
        <div className="flex text-[15px] max-sm:text-[14px] font-semibold gap-3 max-sm:gap-1">
            <span className="text-slate-300">Sort By</span>
            <div
                ref={sortingLinkRef}
                onClick={clickedSortingLink}
                className="flex gap-1 items-center cursor-pointer text-slate-800 hover:text-orange-600"
            >
                <span>{sortingLabel}</span>
                {openSortingDropDown ? (
                    <KeyboardArrowUpIcon sx={{ fontSize: "19px" }} />
                ) : (
                    <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />
                )}
            </div>
        </div>
    );
}

export default ProjectsSubHeader;

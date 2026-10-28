type Filter = "all" | "active" | "done";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterBar({
  filter,
  onFilterChange,
}: FilterBarProps) {
  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Done", value: "done" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onFilterChange(item.value)}
          className={`rounded-lg px-5 py-2 font-medium transition ${
            filter === item.value
              ? "bg-blue-600 text-white shadow-md"
              : "bg-slate-100 text-slate-600 hover:bg-blue-100"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
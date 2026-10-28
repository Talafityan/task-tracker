type Filter = "all" | "active" | "done";

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterBar({ filter, onFilterChange }: FilterBarProps) {
  return (
    <div>
      {(["all", "active", "done"] as const).map((value) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          style={{
            fontWeight: filter === value ? "bold" : "normal",
            marginRight: "10px",
          }}
        >
          {value === "all"
            ? "All"
            : value === "active"
            ? "Active"
            : "Done"}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
"use client";

import { useId, useMemo, useState } from "react";
import { AnimalCard } from "@/components/animal-card";
import { SearchIcon, XIcon } from "@/components/icons";
import { animals, stations } from "@/lib/animals";

const speciesOptions = ["All", "Dogs", "Cats"] as const;
const ageOptions = ["All ages", "Puppy / kitten", "Young", "Adult", "Senior"] as const;
const sortOptions = ["Featured", "Name"] as const;

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-9 border px-3.5 py-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.1em] transition ${
        active
          ? "border-forest bg-forest text-paper"
          : "border-ink/15 text-ink/60 hover:border-forest/40 hover:text-forest"
      }`}
    >
      {children}
    </button>
  );
}

export function AdoptBrowser() {
  const searchId = useId();
  const [species, setSpecies] = useState<(typeof speciesOptions)[number]>("All");
  const [age, setAge] = useState<(typeof ageOptions)[number]>("All ages");
  const [station, setStation] = useState("All stations");
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Featured");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = animals.filter((animal) => {
      const speciesMatch =
        species === "All" ||
        (species === "Dogs" && animal.species === "Dog") ||
        (species === "Cats" && animal.species === "Cat");
      const ageMatch =
        age === "All ages" ||
        (age === "Puppy / kitten"
          ? animal.ageGroup === "Puppy" || animal.ageGroup === "Kitten"
          : animal.ageGroup === age);
      const stationMatch = station === "All stations" || animal.station === station;
      const queryMatch =
        !term ||
        [animal.name, animal.breed, animal.station, animal.summary, ...animal.traits]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return speciesMatch && ageMatch && stationMatch && queryMatch;
    });
    if (sort === "Name") {
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    return [...result].sort((a, b) => Number(b.urgent) - Number(a.urgent));
  }, [species, age, station, sort, query]);

  const hasFilters =
    species !== "All" ||
    age !== "All ages" ||
    station !== "All stations" ||
    query.trim().length > 0;

  function clearAll() {
    setSpecies("All");
    setAge("All ages");
    setStation("All stations");
    setSort("Featured");
    setQuery("");
  }

  return (
    <div>
      <div className="border-y border-ink/15 bg-paper">
        <div className="shell py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xs">
              <label htmlFor={searchId} className="sr-only">
                Search companions
              </label>
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, breed, or trait"
                className="field-box min-h-11 w-full pl-10 pr-9 text-[13px]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center text-ink/40 hover:text-forest"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <fieldset className="flex flex-wrap items-center gap-2">
                <legend className="sr-only">Species</legend>
                {speciesOptions.map((option) => (
                  <Pill
                    key={option}
                    active={species === option}
                    onClick={() => setSpecies(option)}
                  >
                    {option}
                  </Pill>
                ))}
              </fieldset>

              <fieldset className="flex flex-wrap items-center gap-2">
                <legend className="sr-only">Age</legend>
                {ageOptions.map((option) => (
                  <Pill
                    key={option}
                    active={age === option}
                    onClick={() => setAge(option)}
                  >
                    {option}
                  </Pill>
                ))}
              </fieldset>

              <div className="flex items-center gap-2">
                <label htmlFor="station-filter" className="label">
                  Station
                </label>
                <select
                  id="station-filter"
                  value={station}
                  onChange={(event) => setStation(event.target.value)}
                  className="min-h-9 border border-ink/15 bg-paper px-2.5 py-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.1em] text-ink/65 focus:border-clay focus:outline-none"
                >
                  <option>All stations</option>
                  {stations.map((option) => (
                    <option key={option.name}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shell py-10 lg:py-14">
        <div className="flex flex-col justify-between gap-4 border-b border-ink/15 pb-5 sm:flex-row sm:items-end">
          <p className="eyebrow text-ink/45" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "companion" : "companions"}
            {hasFilters ? " · filtered" : " · full registry"}
          </p>
          <div className="flex items-center gap-4">
            {hasFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="font-manrope text-[10px] font-semibold uppercase tracking-[0.1em] text-clay-deep underline decoration-clay/40 underline-offset-4 hover:text-forest"
              >
                Reset
              </button>
            )}
            <div className="flex items-center gap-2">
              <label htmlFor="sort-filter" className="label">
                Order
              </label>
              <select
                id="sort-filter"
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value as (typeof sortOptions)[number])
                }
                className="min-h-9 border border-ink/15 bg-transparent px-2.5 py-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.1em] text-ink/65 focus:border-clay focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((animal, index) => (
              <AnimalCard
                key={animal.slug}
                animal={animal}
                priority={index < 3}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start py-20">
            <p className="eyebrow text-clay-deep">No matches</p>
            <p className="mt-4 max-w-md font-fraunces text-3xl leading-tight text-forest">
              Nothing in the registry fits those filters today.
            </p>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink/60">
              Try a broader search, or tell us what you are looking for and we
              will keep you in mind as new companions arrive.
            </p>
            <button type="button" onClick={clearAll} className="btn-outline mt-6">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

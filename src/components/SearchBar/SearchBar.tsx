import './SearchBar.css'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchBar({ value, onChange, placeholder = 'Buscar...' }: SearchBarProps) {
  return (
    <div className="stgo-search">
      <input
        type="search"
        className="stgo-search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
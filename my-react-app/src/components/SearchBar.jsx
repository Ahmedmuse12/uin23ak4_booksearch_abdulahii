export default function SearchBar({query, setQuery}){
    const [search, setSearch] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }    

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (title)=>{
        setCurrentId(title)
        localStorage.setItem("karakterID", title)
    }}
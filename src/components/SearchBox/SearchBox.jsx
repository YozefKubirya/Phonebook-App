import { useDispatch, useSelector } from "react-redux"
import { changeFilters } from "../../redux/filters/filtersSlice"
import css from '../SearchBox/SearchBox.module.css'
import { selectNameFilter } from '../../redux/selectors'
export default function SearchBox(){
   const dispatch= useDispatch()
   const filterName=useSelector(selectNameFilter)
  
   const searchContact=(e)=>{  
dispatch(changeFilters({name:e.target.value}))
   }
   return<>
   <div className={css.searchContainer}>
   <p>Search Contact by Name</p>
   <input type="text"  name="name" value={filterName} onChange={searchContact} className={css.searchInput}/>
   </div>
   </>
}